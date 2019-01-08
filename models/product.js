'use strict';
/** @namespace models.brand */
/** @namespace models.category */
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    gender: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    product.belongsTo(models.brand, {onDelete: 'RESTRICT'});
    product.belongsTo(models.category, {onDelete: 'RESTRICT'});
  };
  return product;
};