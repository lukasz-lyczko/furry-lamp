'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};