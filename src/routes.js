const express = require('express')
const multer = require('multer')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = multer(multerConfig)
const UserController = require('./app/controllers/UserController')

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

module.exports = routes
