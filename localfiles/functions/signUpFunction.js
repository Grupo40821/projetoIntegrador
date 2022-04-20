const tabela = require('../../models');
const Usuario = require('../../models/Usuario');
async function signUpFunction (parmBody, parmReq, parmRes) {
    let {name,emailSignUp,passwordSignUp,tipo,phone,cpf,rg,state,city,civilState} = parmBody;

    //Declaração de variável verificadora de dados que não podem se repetir.
    let userVerifyEmail,userVerifyPhone,userVerifyCpf,userVerifyRg

    //Consultas por dados que não podem se repetir
    await tabela.Usuario.findAll({where: {email: emailSignUp}}).then(userVarEmail=>userVerifyEmail=userVarEmail[0])
    await tabela.Usuario.findAll({where: {telefone: phone}}).then(userVarPhone=>userVerifyPhone=userVarPhone[0])
    await tabela.Usuario.findAll({where: {cpf: cpf}}).then(userVarCpf=>userVerifyCpf=userVarCpf[0])
    await tabela.Usuario.findAll({where: {rg: rg}}).then(userVarRg=>userVerifyRg=userVarRg[0])

    //Condicional que verifica se dados são repetidos
    if (userVerifyEmail != undefined){
        parmRes.render('login', {signUp:false, credenciaisCadastro:true, cadastro: false, loginFail:false})
    } else {
        tabela.Usuario.create({
            id: null,
            nome: name,
            email: emailSignUp,
            senha: passwordSignUp,
            telefone: phone,
            cpf: cpf,
            rg: rg,
            estado: state,
            cidade: city,
            estadoCivil: civilState,
            tipo: tipo
        })
        parmRes.render('login', {signUp:true, credenciaisCadastro:false, cadastro: false, loginFail:false})
    }
}

module.exports = signUpFunction;