'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    content: {
      type:DataTypes.STRING,
      validate:{
        len: [5, 2000]
      }
    }
  }, {});

  Comments.associate = function(models) {
    Comments.belongsTo(models.Image, {
      // foreignKey: 'image'

    });
  };

  return Comments;
};
