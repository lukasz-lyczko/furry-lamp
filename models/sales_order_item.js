'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('sales_order_item', {
        quantity: DataTypes.INTEGER,
        item_price: DataTypes.DOUBLE
    }, {});
};