'use strict';
module.exports = (sequelize, DataTypes) => {
  var User2 = sequelize.define('User2', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User2.associate = function(models) {
    // associations can be defined here
  };
  return User2;
};
