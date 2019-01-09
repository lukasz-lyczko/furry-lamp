'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('category', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}}
    }, {});
};