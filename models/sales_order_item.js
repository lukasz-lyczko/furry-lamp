'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_order_item = sequelize.define('sales_order_item', {
    quantity: DataTypes.INTEGER,
    item_price: DataTypes.DOUBLE
  }, {});
  sales_order_item.associate = function(models) {
    // associations can be defined here
  };
  return sales_order_item;
};