const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    try {
      await User.create(req.body)

      return res.redirect('/')
    } catch (error) {
      return res.redirect('/signup')
    }
  }
}

module.exports = new UserController()
