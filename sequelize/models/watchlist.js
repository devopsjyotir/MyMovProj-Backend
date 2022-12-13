'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Watchlist.init({
    
    user_rating: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    movie_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    watched_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Watchlist',
    tableName: 'watchlists',
    underscored: true
  });
  return Watchlist;
};