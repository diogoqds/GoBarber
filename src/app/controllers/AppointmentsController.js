const { User } = require('../models')

class AppointmentsController {
  async create (req, res) {
    try {
      const provider = await User.findByPk(req.params.provider)
      return res.render('appointments/create', { provider })
    } catch (error) {
      req.flash('error', 'erro na aplicação')
      return res.redirect('/')
    }
  }
}

module.exports = new AppointmentsController()
