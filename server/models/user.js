module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });
  return User;
};