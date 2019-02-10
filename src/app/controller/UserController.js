const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }
  async store (req, res) {
    // req.body.avatar = 'test.jpg'
    const { filename } = req.file
    await User.create({ ...req.body, avatar: filename })
    return res.redirect('/')
  }
}

module.exports = new UserController()
