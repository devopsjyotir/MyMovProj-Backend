const Router = require('express').Router()
const controller = require('../controllers/UsersController')


Router.get('/',controller.GetAllUsers)
Router.get('/:user_id',controller.GetUserDetails)

module.exports = Router