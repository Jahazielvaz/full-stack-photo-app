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

  Images.associate = (models) => {
    Images.hasOne(models.imagePost, {
      foreignKey: 'imageId',
      as: 'Image'
    })
  }
  return Images;
};
