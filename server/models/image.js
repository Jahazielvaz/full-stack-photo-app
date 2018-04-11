'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    url: {
      type: DataTypes.STRING
    },
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};
