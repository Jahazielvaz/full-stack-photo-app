'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.hasMany(models.Comments)
  };
  return Image;
};
