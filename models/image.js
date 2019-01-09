'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('image', {
        filename: {type: DataTypes.STRING, validate: {notEmpty: true}}
    }, {});
};