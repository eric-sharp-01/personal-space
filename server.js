const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const cookieParser = require('cookie-parser');
const Database = require('better-sqlite3');
const path = require('path');
const camelcaseObjectDeep = require('camelcase-object-deep');

const db = new Database('web.db', { verbose: console.log });
let webSockets = {};
let port = 80;
if(process.argv.length > 2){
  let v = Number(process.argv[2]);
  port = v > 2000 ? v : 80;
}

app.use(cookieParser());
app.use(express.json());
let authorize = (req, res, next) => {
  if(req.path.includes('login') 
    || req.path.includes('static') 
    || req.path.includes('fonts') 
    || req.path.includes('manifest') 
    || req.path.includes('favicon.ico') 
    || req.path.includes('logo192.png')
  ){
    next();
  }else{
    let hashedPassword = req.cookies.hashedPassword;
    if(hashedPassword){
      let row = db.prepare('SELECT Id FROM User WHERE HashedPassword = ?').get(hashedPassword);
      row = camelcaseObjectDeep(row, { deep: true });
      if(row && row.id){
        req.userId = row.id;
        next();
      }else{
        let error = new Error();
        error.status = 401;
        next(error);
      }
    }else{
      let error = new Error();
      error.status = 401;
      next(error);
    }
  }
}
app.use(authorize);

app.use(function (err, req, res, next) {
  return res.status(err.status).redirect('/login');
});

app.get('/api/chats', function (req, res) {
  let userId = req.userId;
  let sql = `
    SELECT C.SenderId, C.ReceiverId, C.Content, C.SentAt FROM Chat C 
    WHERE C.SenderId = ? OR C.ReceiverId = ?
    ORDER BY C.SentAt DESC
    LIMIT 100
  `;
  let rows = db.prepare(sql).all(userId, userId);
  rows = camelcaseObjectDeep(rows, { deep: true });
  rows.reverse();
  res.send(rows);
});

app.get('/api/logout', function (req, res) {
  let options = {
    maxAge: 0
  };
  res.cookie('hashedPassword', '', options);
  res.cookie('username', '', options);
  res.cookie('id', '', options);
  res.status(200).send();
});

app.get('/api/receivers', function (req, res) {
  let userId = Number(req.userId);
  let rows = db.prepare('SELECT Id, Nickname, PhoneNumber FROM User WHERE Id != ?').all(userId);
  console.log(rows);
  rows = camelcaseObjectDeep(rows, { deep: true });
  res.send(rows);
});

// POST method route
app.post('/api/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let row = db.prepare('SELECT Id, Username, HashedPassword FROM User WHERE Username = ? and Password = ?').get(username, password);
  let options = {
    maxAge: 1000 * 60 * 60 * 24 * 7
  };
  row = camelcaseObjectDeep(row, { deep: true });
  if(row && row.id){
    res.cookie('hashedPassword', row.hashedPassword, options);
    res.cookie('username', row.username, options);
    res.cookie('id', row.id, options);
    res.send({
      id: row.id,
      username: row.username
    });
  }else{
    res.status(401).send('invalid username or password');
  }
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    let action = JSON.parse(msg);
    switch(action.type){
      case 'register':
        webSockets[`socket-${Number(action.userId)}`] = ws;
        break;
      case 'message':
        let content = action.content || '';
        if(content){
          let sentAt = new Date().getTime();
          let senderId = Number(action.senderId);
          let receiverId = Number(action.receiverId);
          db.prepare('INSERT INTO CHAT (SenderId, ReceiverId, Content, SentAt) VALUES (?, ?, ?, ?)').run(senderId, receiverId, content, sentAt);
          let socketId = `socket-${receiverId}`;
          if(webSockets[socketId]){
            webSockets[socketId].send(JSON.stringify(action));
          }
        }
        break;
      default:
        break;
    }
  });
});

app.use('/static', express.static(__dirname + '/build/static'));
app.use('/fonts', express.static(__dirname + '/build/fonts'));
app.get("/manifest.json", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/manifest.json'));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/favicon.ico'));
});
app.get("/logo192.png", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/logo192.png'));
});
app.get("/manifest.json/logo192.png", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/logo192.png'));
});
app.get("/logo192.png", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/logo192.png'));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => console.log(`Now listening at port ${port}`));

//https://cloud.tencent.com/developer/article/1528784