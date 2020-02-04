'use strict';

module.exports = (sequelize, DataTypes) => {
  const MegaAssessment = sequelize.define('MegaAssessment', {
  });

  MegaAssessment.associate = function (models) {
    models.MegaAssessment.hasMany(models.MegaAssessmentEntry, { as: 'MegaAssessmentEntries' });
  };

  return MegaAssessment;
};
