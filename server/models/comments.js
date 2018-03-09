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
    // associations can be defined here
    
  };
  return Comments;
};
