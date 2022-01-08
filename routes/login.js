var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
const { check, validationResult, body } = require('express-validator');
let validarLogin = [
    check('emailSignIn')
        .notEmpty().withMessage('* O campo email deve ser preenchido.')
        .isEmail().withMessage('* Insira um email válido.'),
    check('passwordSignIn')
        .notEmpty().withMessage('* O campo senha deve ser preenchido.'),
];
let validarCadastro = [
    check("name")
        .notEmpty().withMessage('* O campo nome deve ser preenchido.')
        .isLength({ min: 4, max: 150 }).withMessage('* O nome deve ter entre 4 e 150 caracteres.'),
    check("emailSignUp")
        .notEmpty().withMessage('* O campo email deve ser preenchido.')
        .isEmail().withMessage('* Insira um email válido.'),
    check("passwordSignUp")
        .notEmpty().withMessage('* O campo senha deve ser preenchido.')
        .isLength({ min: 4, max: 20 }).withMessage('* A senha deve ter entre 4 e 20 caracteres.'),
    check("tipo")
        .notEmpty().withMessage('* Você deve marcar se deseja se tornar usuário ou motorista.'),
    check("phone")
        .notEmpty().withMessage('* O campo telefone deve ser preenchido.')
        .isLength({ min:10, max:11 }).withMessage('* Insira um número de telefone válido.'),
    check("cpf")
        .notEmpty().withMessage('* O CPF nome deve ser preenchido.')
        .isLength({ min:11, max:11 }).withMessage('* Insira CPF válido.'),
    check("rg")
        .notEmpty().withMessage('* O RG nome deve ser preenchido.')
        .isLength({ min:8, max:12 }).withMessage('* Insira RG válido.'),
    check("state")
        .notEmpty().withMessage('* O estado deve ser escolhido.'),
    check("city")
        .notEmpty().withMessage('* A cidade deve ser escolhida.'),
    check("civilState")
        .notEmpty().withMessage('* O estado civil nome deve ser escolhido.'),
    check("terms")
        .notEmpty().withMessage('* Os termos devem ser aceitos para utilizar a plataforma.'),
]

/* GET users listing. */
router.get('/', indexController.login);
router.post('/signUp', validarCadastro, indexController.signUp);
router.post('/signIn', validarLogin, indexController.signIn);
module.exports = router;
