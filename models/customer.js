'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('customer', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        email: {type: DataTypes.STRING, validate: {notEmpty: true, isEmail: true}},
        password: {type: DataTypes.STRING, validate: {notEmpty: true, len: [8, 255]}}
    }, {});
};