'use strict';
module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define('size', {
    name: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  size.associate = function(models) {
    // associations can be defined here
  };
  return size;
};