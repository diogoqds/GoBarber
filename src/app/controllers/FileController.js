const path = require('path')

class FileController {
  show (req, res) {
    try {
      const { file } = req.params

      const filePath = path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'tmp',
        'upload',
        file
      )
      return res.sendFile(filePath)
    } catch (error) {
      req.flash('error', 'erro na aplicação. Tente novamente!')
      return res.redirect('/')
    }
  }
}

module.exports = new FileController()
