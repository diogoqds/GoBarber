const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    try {
      const providers = await User.findAll({ where: { provider: true } })
      return res.render('dashboard', { providers })
    } catch (error) {
      req.flash('error', 'erro na aplicação. Tente novamente!')
      return res.redirect('/')
    }
  }
}

module.exports = new DashboardController()
