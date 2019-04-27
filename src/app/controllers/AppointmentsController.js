const { User, Appointment } = require('../models')

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

  async store (req, res) {
    try {
      const { id } = req.session.user
      const { provider } = req.params
      const { date } = req.body

      await Appointment.create({
        user_id: id,
        provider_id: provider,
        date
      })

      return res.redirect('/')
    } catch (error) {
      req.flash('error', error.message)
      return res.redirect('/')
    }
  }
}

module.exports = new AppointmentsController()
