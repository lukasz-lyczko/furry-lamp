'use strict';
module.exports = (sequelize, DataTypes) => {
    const size = sequelize.define('size', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        description: DataTypes.STRING
    }, {});
    size.associate = function (models) {
        size.hasOne(models.stock);
    };
    return size;
};