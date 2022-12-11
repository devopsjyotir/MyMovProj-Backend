const Router = require('express').Router()
const controller = require('../controllers/MoviesController')


Router.get('/', controller.GetAllMovies)
Router.post('/', controller.CreateMovie)
Router.get('/:movie_id', controller.GetMovieDetails)
Router.put('/:movie_id', controller.UpdateMovie)



module.exports = Router