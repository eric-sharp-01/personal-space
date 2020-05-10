const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;
const sqlite3 = require('sqlite3');
const camelcaseMiddleware = require('express-camelcase-response-keys');

const headers = {
  "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  "x-rapidapi-key": "512fae1fd1mshc7bd5af918d8f4fp1f310fjsn15545548e8e0"
};
const openDb = () => {
  let db = new sqlite3.Database('./words.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });
  return db;
}

app.use(bodyParser.json());
app.use(camelcaseMiddleware({
  deep: true
}));

app.get("/api/words", async (req, res) => {
  let text = req.query.name;
  let db = openDb();
  let row = null;
  try{
    row = await new Promise((resolve, reject) => {
      db.get(`SELECT * FROM WORD WHERE Name = '${text}'`, [], (err, row) => {
          if (err) {
              reject(err);
          }
          resolve(row);
      });
    })
  }catch(err){
    console.log(err);
  }

  db.close()

  let word = null;
  try{
    let http = await new Promise((resolve, reject) => {
      axios.get(`https://wordsapiv1.p.rapidapi.com/words/${text}/definitions`, { headers }).then(res => { resolve(res)}).catch(err => reject(err));
    })
    word = http ? http.data : null;
  }catch(err){
    console.log(err);
  }

  let addToDict = !row && !!word;
  res.send({ data: word, addToDict });

});

app.post("/api/words", async (req, res) => {
  let text = req.body.word;
  let db = openDb();
  let now = new Date().toISOString();
  let r = null;
  
  try{
    r = await new Promise((resolve, reject) => {
      db.run(`INSERT INTO WORD VALUES (?, ?, ?)`, [null, text, now], function(err) {
        if (err) {
          console.log(err);
          reject(false);
        }
        resolve(true);
      });
    });
  }catch(err){
    console.log(err);
    r = err;
  }
  db.close();

  res.send({flag: r});
})

app.get("/api/words/all", async (req, res) => {
  let db = openDb();
  let r = null;
  try{
    r = await new Promise((resolve, reject) => {
      db.all(`SELECT * FROM WORD`, [], (err, rows) =>{
        if(err) {
          reject(err);
        }else{
          resolve(rows.map(i => i['Name']));
        }
      })
    });
  }catch(err){
    console.log(err);
    r = err;
  }
  db.close();

  res.send({words: r});
})

app.get(["/", "/notebook"], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.use('/', express.static('public'));
app.use('/static', express.static('dist/static'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))