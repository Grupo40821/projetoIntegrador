const tabela = require('../../models');
async function signInFunction (parmBody, parmReq, parmRes) {
    let {emailSignIn,passwordSignIn} = parmBody;

    let cadastroUsuario;
    await tabela.Usuario.findAll({where: {email: emailSignIn}}).then(cadastro=>cadastroUsuario=cadastro[0])
    if (cadastroUsuario == undefined) {
        parmRes.render('login', {signUp: false, credenciaisCadastro:false, cadastro: true, loginFail:false})
    } else if (cadastroUsuario != undefined) {
        if (cadastroUsuario.dataValues.senha === passwordSignIn && cadastroUsuario.dataValues.email.toLowerCase() == emailSignIn.toLowerCase()){
            let verifyUserDriver;
            if (cadastroUsuario.dataValues.tipo == 'usuario') {
                parmRes.render('usuarios')
            } else if (cadastroUsuario.dataValues.tipo == 'motorista') {
                parmReq.session.usuario = cadastroUsuario.dataValues;
                parmReq.session.atividade = 'offline'
                tabela.MotoristasAtivos.destroy({where: {id_motorista: parmReq.session.usuario.usuario_id}})
                parmRes.render('motorista-logado', {usuario: '', ativo:parmReq.session.atividade});
            }
        } else {
            parmRes.render('login', {signUp:false, credenciaisCadastro:false, cadastro: false, loginFail:true})
        }
    }
}
module.exports = signInFunction;
