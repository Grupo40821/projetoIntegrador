const tabela = require('../../models');

async function alocarMotoristas (parmBody, parmReq, parmRes) {
    let {motorista,regiao,reboque,pneu,bateria,patins} = parmBody;

    //Verificadores para remover inputs Undefined
    if(reboque != 'true'){
        reboque = 0
    }
    if(pneu != 'true'){
        pneu = 0
    }
    if(bateria != 'true'){
        bateria = 0
    }
    if(patins != 'true'){
        patins = 0
    }

    //Remoção do Motorista da Lista de Ativos
    let online = parmBody.motorista;
    //Determinação Offline na sessão
    parmReq.session.atividade = online;
    //Renderização do Online ou Offline na tela
    parmRes.render('motorista-logado', {usuario: '', ativo:parmReq.session.atividade});

    //Verificador se usuário quer estar Online ou Offline
    if(motorista == 'online'){
        //Variável verificadora para armazenamento na sessão
        let verifyId
        await tabela.MotoristasAtivos.findAll({where: {id_motorista: parmReq.session.usuario.usuario_id}}).then(thenId=>verifyId=thenId)

        //Remoção do Motorista da lista de Ativos
        tabela.MotoristasAtivos.destroy({where: {id_motorista: parmReq.session.usuario.usuario_id}})
        //Inserção do Motorista da lista de Ativos
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
        //Remoção do Motorista da Lista de Ativos
        tabela.MotoristasAtivos.destroy({where: {id_motorista: parmReq.session.usuario.usuario_id}})
    }
}

module.exports = alocarMotoristas;