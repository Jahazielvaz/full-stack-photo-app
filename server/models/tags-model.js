'use strict';

module.exports = (sequelize, DataTypes) => {
  let Tags = sequelize.define('tags', {
    type: DataTypes.TEXT,
    validate: {
      isNull: false
    }
  });

  return Tags;
}
