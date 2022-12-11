const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const UserRouter = require('./UserRouter')
const WatchlistRouter = require('./WatchlistRouter')


Router.use("/users", UserRouter)
Router.use('/movies', MovieRouter)
Router.use('/relations', WatchlistRouter)

module.exports = Router
