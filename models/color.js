'use strict';
module.exports = (sequelize, DataTypes) => {
    const color = sequelize.define('color', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        rgb: {type: DataTypes.STRING, validate: {len: [7]}}
    }, {});
    color.associate = function (models) {
        color.hasOne(models.stock)
    };
    return color;
};