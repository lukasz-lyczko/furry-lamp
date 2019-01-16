'use strict';
/** @namespace models.brand */
/** @namespace models.category */
/** @namespace models.review */
/** @namespace models.stock */
/** @namespace models.sales_order_item */
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        gender: {type: DataTypes.STRING, validate: {isIn: [['F', 'M', 'U']]}}
    }, {});
    product.associate = function (models) {
        product.belongsTo(models.brand, {onDelete: 'RESTRICT'});
        product.belongsTo(models.category, {onDelete: 'RESTRICT'});
        product.hasMany(models.image);
        product.hasMany(models.review);
        product.hasMany(models.stock, {onDelete: 'RESTRICT'});
        product.hasMany(models.sales_order_item, {onDelete: 'RESTRICT'})
    };
    return product;
};