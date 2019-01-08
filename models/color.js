'use strict';
module.exports = (sequelize, DataTypes) => {
  const color = sequelize.define('color', {
    name: DataTypes.STRING,
    rgb: DataTypes.STRING
  }, {});
  color.associate = function(models) {
    // associations can be defined here
  };
  return color;
};