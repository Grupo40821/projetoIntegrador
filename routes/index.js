var express = require('express');
const { index } = require('../controllers/indexController');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/minha-conta', indexController.conta);

module.exports = router;
