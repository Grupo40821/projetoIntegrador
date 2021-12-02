var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET users listing. */
router.get('/', indexController.login);
router.post('/signUp', indexController.signUp);
module.exports = router;
