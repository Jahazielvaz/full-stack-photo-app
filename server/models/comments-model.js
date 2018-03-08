'use strict'

//Belongs to many

module.exports = (sequelize, DataTypes) => {
  let Comments = sequelize.define('comments', {
    content: {
      type: DataTypes.STRING,
      isNull: false,
      validate:{
        len: [10, 1300]
      }
    }


  });
  return Comments;

  // Comments.associate = function(models){
  //   Comments.belongsTo(models.user, {
  //     foreignKey: ''
  //   })

}
