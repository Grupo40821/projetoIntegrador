const tabela = require('../../models');

async function findDriverFunction (parmBody, parmReq, parmRes) {
    let {regiao,reboque,pneu,bateria,patins} = parmBody;

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

    //Requisitar Todos os Motoristas Ativos Que Atendam aos Serviços Procurados
    let motoristas;
    await tabela.MotoristasAtivos.findAll({where:{regiao, reboque,pneu,bateria,patins}}).then(thenId=>motoristas=thenId);

    let listaDeMotoristas = [];
    if (motoristas.length >= 1){

    //Declaração Inicial do Array de Motoristas Aleatórios
    let array = [];

    //Selecionar, aleatóriamente e sem repetir, 5 motoristas da lista
    while (array.length < 5 && array.length != motoristas.length){
        let exibir = '' + Math.random() * (motoristas.length);
        let indice = exibir[0];

        //Verificar se motorista escolhido já não está na lista
        let verify = false;
        for (i=0; i<array.length && verify == false; i++){
            if (array[i] == motoristas[indice].dataValues){
                verify = true
            }
        }
        if (verify == false){
            array.push(motoristas[indice].dataValues)
        }
    }

    //Transformar o Array Objeto do Motorista em Array de seu ID cadastrado
    for (i=0;i<array.length;i++){
        let driverObject = array[i]
        listaDeMotoristas.push(driverObject.id_motorista)
    }

    //Requisitar Dados dos Motoristas listado no Array de ID
    let motoristasMostrar;
    await tabela.Usuario.findAll({where: {usuario_id: listaDeMotoristas}}).then(thenId=>motoristasMostrar=thenId);

    //Transformar Array de Objeto de Motoristas Bruto em Array de Objeto de dados dos motoristas.
    let dadosDosMotoristas = []
    for (i=0; i<motoristasMostrar.length;i++){
        dadosDosMotoristas.push(motoristasMostrar[i].dataValues)
    }

    //Transformar Array de Objeto de Dados dos Motoristas em Array de Objeto de Nomes e Telefones
    let motoristasFinal = []
    for (i=0;i<dadosDosMotoristas.length;i++){
        motoristasFinal.push({nome: dadosDosMotoristas[i].nome, telefone: dadosDosMotoristas[i].telefone})
    }
    console.log(motoristasFinal)
    parmRes.render('usuarios', {motoristas: motoristasFinal, findVerify: true})
    } else {
        console.log('Não existem motoristas.')
    }
}

module.exports = findDriverFunction;