const Router = require('express').Router()
const controller = require('../controllers/MoviesController')


Router.get('/', controller.GetAllMovies)
Router.get('/:movie_id', controller.GetMovieDetails)

module.exports = Router