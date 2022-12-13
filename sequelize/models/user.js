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
      // define association here
      User.belongsToMany(models.Movie, {
        as: 'watch_list',
        through: models.Watchlist
,        foreignKey: 'user_id'
      })
    }
  }
  User.init({
  
   name: DataTypes.STRING,
   email: {
    type: DataTypes.STRING,
    allowNull: false,
  
    
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    }
   },
   {
    sequelize,
    modelName: 'User',
    tableName: 'users',
   
  });
  return User;
};