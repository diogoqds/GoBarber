const path = require('path')
const multer = require('multer')
const crypto = require('crypto')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'upload'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
