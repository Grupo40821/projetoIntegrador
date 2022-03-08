const tabela = require('../../models');
const Usuario = require('../../models/Usuario');
async function signInFunction (parmBody, parmReq, parmRes) {
    let {emailSignIn,passwordSignIn} = parmBody;

    let cadastroUsuario;
    await tabela.Usuario.findAll({where: {email: emailSignIn}}).then(cadastro=>cadastroUsuario=cadastro[0])
    if (cadastroUsuario == undefined) {
        parmRes.send('Usuário não encontrado')
    } else if (cadastroUsuario != undefined) {
        if (cadastroUsuario.dataValues.senha === passwordSignIn && cadastroUsuario.dataValues.email.toLowerCase() == emailSignIn.toLowerCase()){
            parmRes.send('Logado com sucesso')
        } else {
            parmRes.send('Senha incorreta.')
        }
    }
}
module.exports = signInFunction;
