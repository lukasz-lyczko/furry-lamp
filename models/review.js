'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('review', {
        rating: DataTypes.INTEGER,
        comment: DataTypes.STRING
    }, {});
};