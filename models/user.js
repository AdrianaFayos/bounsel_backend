'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Recordsystem, {
        foreignKey:'userId'
      })
    }
  };
  User.init({
    name: {
      type : DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "The name can only contain letters",
        },
        len: {
          args: [2, 255],
          msg: "The name must be at least two characters long",
        },
      },
    }, 

    lastname: {
      type : DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "The name can only contain letters",
        },
        len: {
          args: [2, 255],
          msg: "The name must be at least two characters long",
        },
      },
    }, 

    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Enter a valid email",
        },
      }  
    },
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }

  return User;
};