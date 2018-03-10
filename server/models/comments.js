'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      comment: {
        type:DataTypes.STRING,
        validate:{
          len: [5, 2000]
        }
      }
    }, {
      classMethods: {
        associate: function(models) {
          Comments.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
          });
        }
      }
    });

  return Comments;
};
