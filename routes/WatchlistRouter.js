const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')


Router.get('/', controller.GetAllRelations)


module.exports = Router