'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('color', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        rgb: {type: DataTypes.STRING, validate: {len: [7]}}
    }, {});
};