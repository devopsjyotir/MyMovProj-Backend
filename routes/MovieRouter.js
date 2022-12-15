const Router = require('express').Router()
const controller = require('../controllers/MoviesController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllMovies)

Router.post('/', controller.CreateMovie)

Router.get('/:movie_id', controller.GetMovieDetails)

Router.put('/:movie_id', 
// middleware.stripToken,
// middleware.verifyToken,
// controller.UpdateMovie
)

Router.delete('/:movie_id',
// middleware.stripToken,
// middleware.verifyToken,
controller.DeleteMovie
)



module.exports = Router