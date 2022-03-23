const signUpFunction = require('../localfiles/functions/signUpFunction');
const signInFunction = require('../localfiles/functions/signInFunction');
const { validationResult } = require('express-validator');

const indexController = {
  index: function(req, res, next) {
    res.render('index');
  },
  login: function(req, res) {
    res.render('login', {valid: false, signUp:false, credenciaisCadastro:false, cadastro: false, loginFail:false});
  },
  signUp: (req, res)=>{
    let problema = validationResult(req)
    if(problema.isEmpty()){
      signUpFunction(req.body, req, res)
    } else {
      res.render('login', {errors: problema.errors, valid: true})
    }
  },
  signIn: (req, res)=>{
    let problema = validationResult(req);
    if(problema.isEmpty()){
      signInFunction(req.body, req, res)
    } else {
      res.render('login', {errors: problema.errors, estadosSrc: 'javascripts/seletorEstados.js', animacaoSrc: 'javascripts/animacaoLogin.js'})
    }
  }
}

module.exports = indexController;