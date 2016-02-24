const db = {};
db.Sequelize = require('sequelize');
db.sequelize = new db.Sequelize(
  'database',
  'username',
  'password',
  {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: __dirname + '/dev.db'
  }
);

var User = db.sequelize.import(__dirname + '/user.js');
exports.createUser = function(firstName, lastName, email) {
  return User.sync({force: true}).then(function() {
      return User.create({
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  });
}
exports.searchUser = function(email) {
  return User.findOne({ where: { email: email } }).then(function(user) {
    if(user) {
      console.log('User: ' + user.get('firstName') + ' ' + user.get('lastName') + ', ' + user.get('email'));
    }
    return user;
  });
}

return db;