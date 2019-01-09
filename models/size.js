'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('size', {
        name: {type: DataTypes.STRING, validate: {notEmpty: true}},
        description: DataTypes.STRING
    }, {});
};