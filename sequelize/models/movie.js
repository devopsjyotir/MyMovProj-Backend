'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.User, {
        as:'user_movies',
        through: models.Watchlist,
        foreignKey:'movieId'
      })
    }
  }
  Movie.init({

    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });
  return Movie;
};