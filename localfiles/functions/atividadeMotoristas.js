const tabela = require('../../models');

async function alocarMotoristas (parmBody, parmReq, parmRes) {
    let {motorista,regiao,reboque,pneu,bateria,patins} = parmBody;

    let online = parmBody.motorista;
    parmReq.session.atividade = online;
    parmRes.render('motorista-logado', {usuario: '', ativo:parmReq.session.atividade});

    if(motorista == 'online'){
        let verifyId
        await tabela.MotoristasAtivos.findAll({where: {id_motorista: parmReq.session.usuario.usuario_id}}).then(thenId=>verifyId=thenId)

        tabela.MotoristasAtivos.destroy({where: {id_motorista: parmReq.session.usuario.usuario_id}})
        tabela.MotoristasAtivos.create({
            principal_id: null,
            id_motorista: parmReq.session.usuario.usuario_id,
            regiao: regiao,
            reboque: reboque,
            pneu: pneu,
            bateria: bateria,
            patins: patins,
        })
    } else if (motorista == 'offline'){
        tabela.MotoristasAtivos.destroy({where: {id_motorista: parmReq.session.usuario.usuario_id}})
    }
}

module.exports = alocarMotoristas;