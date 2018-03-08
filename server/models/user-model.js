'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {
      type:DataTypes.STRING,
      validate:{
        isNull: false
      }
    },
    last_name: {
      type:DataTypes.STRING,
      validate:{
        isNull: false
      }
    },
    user_name: {
      type:DataTypes.STRING,
      validate:{
        isNull: false
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        isNull: false
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        isNull: false
      }
    },

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
