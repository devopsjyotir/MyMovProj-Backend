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
    id: DataTypes.INTEGER,
    user_rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    watched_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Watchlist',
    tableName: 'watchlists',
    underscored: true
  });
  return Watchlist;
};