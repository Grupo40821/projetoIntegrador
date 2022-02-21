const tabela = require('../../models');
const Usuario = require('../../models/Usuario');
async function signUpFunction (parmBody, parmReq, parmRes) {
    let {name,emailSignUp,passwordSignUp,tipo,phone,cpf,rg,state,city,civilState} = parmBody;
    if (tipo == 'usuario'){
    let userVerifyEmail,userVerifyPhone,userVerifyCpf,userVerifyRg
    await tabela.Usuario.findAll({where: {email: emailSignUp}}).then(userVarEmail=>userVerifyEmail=userVarEmail[0])
    await tabela.Usuario.findAll({where: {telefone: phone}}).then(userVarPhone=>userVerifyPhone=userVarPhone[0])
    await tabela.Usuario.findAll({where: {cpf: cpf}}).then(userVarCpf=>userVerifyCpf=userVarCpf[0])
    await tabela.Usuario.findAll({where: {rg: rg}}).then(userVarRg=>userVerifyRg=userVarRg[0])
    if (userVerifyEmail != undefined){
        parmRes.send('Email já cadastrado')
    } else if (userVerifyPhone != undefined){
        parmRes.send('Telefone já cadastrado')
    } else if (userVerifyCpf != undefined){
        parmRes.send('CPF já cadastrado')
    } else if (userVerifyRg != undefined){
        parmRes.send('RG já cadastrado')
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
            estadoCivil: civilState
        })
    }
    }
}

module.exports = signUpFunction;