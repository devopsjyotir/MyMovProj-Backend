const Router = require('express').Router()
const controller = require('../controllers/UsersController')


Router.get('/',controller.GetAllUsers)
Router.get('/:user_id',controller.GetUserDetails)
Router.post('/',controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)

module.exports = Router