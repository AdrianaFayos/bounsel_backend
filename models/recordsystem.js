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
      // define association here
    }
  };
  Recordsystem.init({
    userId: DataTypes.INTEGER,
    startrecording: DataTypes.DATE,
    stoprecording: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Recordsystem',
  });
  return Recordsystem;
};