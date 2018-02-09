var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');



var app = express();

var games = require('./games');


app.use(cors())
app.use(bodyParser.json())



app.get('/games', (req, res) => {
  res.send(games);
})


app.post('/games', (req, res) => {
  console.log(req);
  games.push(req.body);
  res.send(games);
})

app.put('/games', (req, res) => {
  res.send(games);
})

app.delete('/games', (req, res) => {
  res.send(games);
})


const port = 3001;

app.listen(port, () => {
  console.log("listening on port", port)
})