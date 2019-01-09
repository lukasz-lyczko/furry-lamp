'use strict';
/** @namespace models.customer */
module.exports = (sequelize, DataTypes) => {
    const sales_order = sequelize.define('sales_order', {
        status: {
            type: DataTypes.INTEGER,
            validate: {notNull: true, isIn: [[0, 1, 2, 3, 4]]}
        }
    }, {});
    sales_order.associate = function (models) {
        sales_order.hasMany(models.sales_order_items);
        sales_order.belongsTo(models.customer);
    };
    return sales_order;
};