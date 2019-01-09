'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('stock', {
        quantity: {type: DataTypes.INTEGER, validate: {min: 0}}
    }, {});
};