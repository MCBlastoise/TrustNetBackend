'use strict';

module.exports = (sequelize, DataTypes) => {
  const MegaAssessmentEntry = sequelize.define('MegaAssessmentEntry', {
    code: {
      type: DataTypes.INTEGER
    },
    postCredibility: {
      type: DataTypes.INTEGER
    },
    distance: {
      type: DataTypes.INTEGER
    }
  });

  return MegaAssessmentEntry;
};
