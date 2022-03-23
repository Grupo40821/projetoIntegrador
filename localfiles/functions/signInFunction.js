const tabela = require('../../models');
const Usuario = require('../../models/Usuario');
async function signInFunction (parmBody, parmReq, parmRes) {
    let {emailSignIn,passwordSignIn} = parmBody;

    let cadastroUsuario;
    await tabela.Usuario.findAll({where: {email: emailSignIn}}).then(cadastro=>cadastroUsuario=cadastro[0])
    if (cadastroUsuario == undefined) {
        parmRes.render('login', {signUp:false, credenciaisCadastro:false, cadastro: true, loginFail:false})
    } else if (cadastroUsuario != undefined) {
        if (cadastroUsuario.dataValues.senha === passwordSignIn && cadastroUsuario.dataValues.email.toLowerCase() == emailSignIn.toLowerCase()){
            let verifyUserDriver;
            if (cadastroUsuario.dataValues.tipo == 'usuario') {
                parmRes.render('usuarios')
            } else if (cadastroUsuario.dataValues.tipo == 'motorista') {
                parmRes.render('motoristas')
                console.log('logado como motorista')
            }
        } else {
            parmRes.render('login', {signUp:false, credenciaisCadastro:false, cadastro: false, loginFail:true})
        }
    }
}
module.exports = signInFunction;
