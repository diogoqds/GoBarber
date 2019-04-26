const express = require('express')
const multer = require('multer')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = multer(multerConfig)
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)
routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)
routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.send('logado')
})

module.exports = routes
