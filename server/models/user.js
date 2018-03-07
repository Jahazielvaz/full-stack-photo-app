'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName {
      type: DataTypes.STRING,
      validate: {
        min: 5
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 8,
        is: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$'
      }
    }
  });

  User.associate = (models) => {
    User.hasMany(models.imagePost, {
      foreignKey: 'userId',
      as: 'Users',
    });
  };

  return User;
};
