module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }
  return res.redirect('/app/dashboard') // se usuario ja estiver logado nao volta par o login
}
