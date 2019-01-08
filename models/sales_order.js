'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_order = sequelize.define('sales_order', {
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[0,1,2,3,4]]
      }
    }
  }, {});
  sales_order.associate = function(models) {
    // associations can be defined here
  };
  return sales_order;
};