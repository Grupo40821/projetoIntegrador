const signUpFunction = require('../localfiles/functions/signUpFunction');
const signInFunction = require('../localfiles/functions/signInFunction');
const estados = require('../localfiles/EstadoCidade/estadosCidades');
const { validationResult } = require('express-validator');

const indexController = {
  index: function(req, res, next) {
    res.render('index');
  },
  login: function(req, res) {
    res.render('login', {estados: estados});
  },
  signUp: (req, res)=>{
    let problema = validationResult(req)
    if(problema.isEmpty()){
      signUpFunction(req.body, req, res)
    } else {
      res.render('login', {estados: estados, errors: problema.errors})
    }
  },
  signIn: (req, res)=>{
    let problema = validationResult(req);
    if(problema.isEmpty()){
      signInFunction(req.body, req, res)
    } else {
      res.render('login', {estados: estados, errors: problema.errors})
    }
  }
}

module.exports = indexController;