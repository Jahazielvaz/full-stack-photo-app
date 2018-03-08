'use strict';
module.exports = (sequelize, DataTypes) => {
  var imagePost = sequelize.define('imagePost', {
    userId: {
      type: DataTypes.INTEGER,
    },
    imageId: {
      type: DataTypes.INTEGER
    }
  });

  imagePost.associate = (models) => {
    imagePost.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    imagePost.belongsTo(models.Images, {
      foreignKey: 'imageId',
      onDelete: 'CASCADE',
    });
  };

  return imagePost;
};
