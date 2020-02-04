'use strict';

module.exports = (sequelize, DataTypes) => {
  const ReasonCode = sequelize.define('ReasonCode', {
    code: {
      type: DataTypes.INTEGER
    }
  });

  return ReasonCode;
};
