const signUpFunction = require('../localfiles/functions/signUpFunction');
const estados = require('../localfiles/EstadoCidade/estadosCidades')

const indexController = {
  index: function(req, res, next) {
    res.render('index');
  },
  login: function(req, res) {
    res.render('login', {estados: estados});
  },
  signUp: (req, res)=>{
    signUpFunction(req.body, req, res)
  }
}

module.exports = indexController;