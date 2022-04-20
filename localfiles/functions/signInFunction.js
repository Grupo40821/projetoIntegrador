const tabela = require('../../models');

async function signInFunction (parmBody, parmReq, parmRes) {
    let {emailSignIn,passwordSignIn} = parmBody;

    //Variável de Armazenamento dos dados de Login
    let cadastroUsuario;

    //Consulta no banco pelos dados de login
    await tabela.Usuario.findAll({where: {email: emailSignIn}}).then(cadastro=>cadastroUsuario=cadastro[0])
    
    //Condicional para saber se usuário está cadastrado ou não
    if (cadastroUsuario == undefined) {
        parmRes.render('login', {signUp: false, credenciaisCadastro:false, cadastro: true, loginFail:false})
    } else if (cadastroUsuario != undefined) {

        //Condicional para saber se os dados de login estão corretos
        if (cadastroUsuario.dataValues.senha === passwordSignIn && cadastroUsuario.dataValues.email.toLowerCase() == emailSignIn.toLowerCase()){
            
            //Declaração de variável para saber se é um Usuario ou Motorista
            let verifyUserDriver;
            if (cadastroUsuario.dataValues.tipo == 'usuario') {
                parmRes.render('usuarios', {motoristas: '', findVerify: false})
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
