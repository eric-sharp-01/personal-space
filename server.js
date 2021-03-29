const express = require('express');
const app = express();
const port = 8080;
const sqlite3 = require('sqlite3');
const camelcaseMiddleware = require('express-camelcase-response-keys');

const openDb = () => {
  let db = new sqlite3.Database('./db.sqlite3', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });
  return db;
}

app.use(camelcaseMiddleware({
  deep: true
}));

app.get("/api/resumes/:id", async (req, res) => {
  let id = req.params.id;
  let db = openDb();
  let row = [];
  try{
    row = await new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Resume WHERE Id = '${id}'`, [], (err, row) => {
          if (err) {
              reject(err);
          }
          resolve(row);
      });
    });
    
  }catch(err){
    console.log(err);
  }
  db.close();
  res.send({ data: row });

});

app.use('/', express.static('public'));
app.use('/static', express.static('dist/static'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))