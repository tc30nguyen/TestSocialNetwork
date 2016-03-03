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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));
app.use(bodyParser.json());
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

app.post('/searchQuery', function(req, res) {
  console.log('query: ' + util.inspect(req.body));
  var userPromise = sequelize.searchUser(req.body.query);
  userPromise.then(function(onFulfilled) {
    if(onFulfilled) {
      console.log('fulfilled: ' + util.inspect(onFulfilled.dataValues));
    }
    res.send(onFulfilled == null? null : onFulfilled.dataValues);
  }, function(onRejected) {
    console.log('rejected: ' + onRejected);
  });
});

app.get('*', function(req, res) {
  res.status(404).send('404 Page Not Found');
});