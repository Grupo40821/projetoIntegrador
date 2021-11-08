var express = require('express');
const { index } = require('../controllers/indexController');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET users listing. */
router.get('/', indexController.login);

module.exports = router;
