const PORT = 8080;
const path = require('path');
const appDir = path.normalize(path.dirname(require.main.filename) + '/..');
const express = require('express');
const app = express();

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