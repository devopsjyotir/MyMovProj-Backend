const Router = require('express').Router()
const controller = require('../controllers/UsersController')


Router.get('/',controller.GetAllUsers)

module.exports = Router