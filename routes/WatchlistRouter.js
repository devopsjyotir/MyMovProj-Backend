const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')


Router.get('/', controller.GetAllRelations)
Router.get('/:user_id', controller.GetUserRelations)
Router.get('/notwatched/:user_id', controller.GetWatchList)
Router.get('/watched/:user_id', controller.GetWatchedMovies)
Router.post('/', controller.CreateRelation)



module.exports = Router