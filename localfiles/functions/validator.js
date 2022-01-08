function validator(nome, email, senha, tipo, tel, cpf, rg, foto, estado, cidade, estadoCivil, termos) {
const { check } = require('express-validator');
let validateRegister = [
    check(nome).notEmpty().withMessage('O campo nome deve ser preenchido.'),
    check(nome).isLength({ min: 4, max: 150 }).withMessage('O nome deve ter entre 4 e 20 caracteres.'),
    check(email).notEmpty().withMessage('O campo email deve ser preenchido.'),
    check(email).isEmail().withMessage('Insira um email válido.'),
    check(senha).notEmpty().withMessage('O campo senha deve ser preenchido.'),
    check(senha).isLength({ min: 4, max: 20 }).withMessage('O nome deve ter entre 4 e 20 caracteres.'),
    check(tipo).notEmpty().withMessage('Você deve marcar se deseja se tornar usuário ou motorista.'),
    check(tel).notEmpty().withMessage('O campo telefone deve ser preenchido.'),
    check(tel).isLength({ min:10, max=11 }).withMessage('Insira um número de telefone válido.'),
    check(cpf).notEmpty().withMessage('O CPF nome deve ser preenchido.'),
    check(cpf).isLength({ min:11, max=11 }).withMessage('Insira CPF válido.'),
    check(rg).notEmpty().withMessage('O RG nome deve ser preenchido.'),
    check(rg).isLength({ min:8, max=12 }).withMessage('Insira RG válido.'),
    check(estado).notEmpty().withMessage('O estado deve ser escolhido.'),
    check(cidade).notEmpty().withMessage('A cidade deve ser escolhida.'),
    check(estadoCivil).notEmpty().withMessage('O estado civil nome deve ser escolhido.'),
    check(termos).notEmpty().withMessage('Os termos devem ser aceitos para utilizar a plataforma.'),
]
}

module.exports = validator;