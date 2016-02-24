const PORT = 8080;
const path = require('path');
const appDir = path.normalize(path.dirname(require.main.filename) + '/..');
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('dev.db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: appDir + '/dev.db'
});

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

User.sync({force: true}).then(function() {
  return User.create({
    firstName: 'Test',
    lastName: 'Lastnamer2'
  });
});

User.findAll().then(function(user) {
  console.log('First name: ' + user.firstName);
});

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
	console.log(req);
	var id = currentID++;
	res.send('id: ' + id);
	users[id] = id;
	console.log(users);
});

app.get('*', function(req, res) {
  res.status(404).send('404 Page Not Found');
});