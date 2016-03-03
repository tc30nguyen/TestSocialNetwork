const PORT = 8080;
const path = require('path');
const appDir = path.normalize(path.dirname(require.main.filename) + '/..');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('dev.db');
const sequelize = require('./models')

const util = require('util'); //DEBUG ONLY

app.use(bodyParser.json());
app.use(express.static('.'));
const server = app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
});

var homePaths = ['/', '/home']
app.get(homePaths, function(req, res) {
  var fullPath = appDir + '/home.html';
  console.log('path to home: ' + fullPath)
  res.sendFile(fullPath);
});

var users = [];
var currentID = 0;
app.post('/user', function(req, res) {
  var id = currentID++;
  console.log('user ' + id + ':\n' + util.inspect(req.body));
  var a = sequelize.createUser(
    req.body.firstName,
    req.body.lastName,
    req.body.email
  );
	res.send('id: ' + id);
  console.log(a);
});

app.post('/searchQuery', function(req, req) {
  console.log('query: ' + util.inspect(req.body));
  sequelize.searchUser(req.body.query);
});

app.get('*', function(req, res) {
  res.status(404).send('404 Page Not Found');
});