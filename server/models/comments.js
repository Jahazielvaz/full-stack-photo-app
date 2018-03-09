'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    content: {
      type:DataTypes.STRING,
      validate:{
        len: [5, 2000]
      }
    },
    user_id: {
      type:DataTypes.STRING
    },
    img_id: {
      type:DataTypes.STRING
    }
  }, {});

  Comments.associate = function(models) {
    // here i'm declairing my association but not too sure what much else to add,
    // still need to test
    Comments.belongsTo(models.Image, {
      foreignKey: 'image'
    })
  };

  return Comments;
};
