'use strict'

//Belongs to many

module.exports = function(sequelize, DataTypes){
  let Comments = sequelize.define('comments', {
    content: {
      type: DataTypes.STRING,
      isNull: false,
      validate:{
        len: [10, 1300]
      },
      {
        //I don't remember the foreign key and associations syntax
      }
    }

    return Comments;
  });

  // Comments.associate = function(models){
  //   Comments.belongsTo(models.user, {
  //     foreignKey: ''
  //   })
  }
}
