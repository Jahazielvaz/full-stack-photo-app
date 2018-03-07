'use strict';

module.exports = function(sequelize, DataTypes){
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
