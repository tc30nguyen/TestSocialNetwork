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
return db;