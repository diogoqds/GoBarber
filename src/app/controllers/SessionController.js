const { User } = require('../models')

class SessionController {
  create (req, res) {
    return res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        console.log('usuario não encontrado')
        return res.redirect('/')
      }

      if (!user.checkPassword(password)) {
        console.log('senha errada')
        return res.redirect('/')
      }

      req.session.user = user
      return res.redirect('/app/dashboard')
    } catch (error) {
      res.redirect('/')
    }
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new SessionController()
