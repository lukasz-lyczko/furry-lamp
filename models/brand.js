'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('brand', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}}
    }, {});
};