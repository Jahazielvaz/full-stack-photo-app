'use strict';
module.exports = (sequelize, DataTypes) => {
  var imagePost = sequelize.define('imagePost', {});

  imagePost.associate = (models) => {
    imagePost.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    imagePost.hasOne(models.Image, {
      
    });
  };

  return imagePost;
};
