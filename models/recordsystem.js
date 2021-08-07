'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recordsystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recordsystem.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  };
  Recordsystem.init({
    userId: DataTypes.INTEGER,
    secondsRecording: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recordsystem',
  });
  return Recordsystem;
};