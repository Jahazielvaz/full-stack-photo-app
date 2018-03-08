'use strict';

module.exports = (sequelize, DataTypes) => {
  let Images = sequelize.define('images', {
    url: {
      type: DataTypes.STRING,
      validate:{
        isNull: false,
        unique: true
      }
    }

  });
  return Images;
};
