//Variável verificadora
let verificador = document.querySelector('#verify').textContent;

//Verificar se dados foram enviados
if (verificador == 'true'){
    //Declaração de variáveis fora de escopo
    let getName = document.querySelectorAll('p.verifyName');
    let getPhone = document.querySelectorAll('p.verifyPhone');
    let objetoMotoristas = [];

    //Ciclo for para montar objeto motoristas
    for (i=0;i<getName.length;i++){
        objetoMotoristas.push({
            nome: getName[i].textContent,
            telefone: getPhone[i].textContent
        })
    }
    
    //Formação da tela de fundo quando motoristas forem procurados.
    let divMotorista = document.querySelector('#divMotorista');
    divMotorista.style.display = 'flex'
    let body = document.querySelector('body');
    body.style.overflow = 'hidden'

    //Ciclo for para criação dos nomes e telefones dos motoristas.
    for (i=0;i<objetoMotoristas.length;i++){
        let content = document.querySelector('#content');
        let divDriver = document.createElement('div')

        //Aplicação dos estilos para as divs
        divDriver.id = 'motorista'+i;
        divDriver.style.fontSize = '22px';
        divDriver.style.fontWeight = 'bold';
        divDriver.style.position = 'absolute'
        divDriver.style.zIndex = '-1';
        divDriver.style.display = 'flex';
        divDriver.style.flexDirection = 'column';
        divDriver.style.alignItems = 'center';

        //Declaração dos Textos Nome e Telefone dentro das divs
        let nomeFor = document.createTextNode(objetoMotoristas[i].nome);
        let telefoneFor = document.createTextNode(objetoMotoristas[i].telefone);
        let nomeP = document.createElement('p');
        let telP = document.createElement('p');
        nomeP.appendChild(nomeFor);
        telP.appendChild(telefoneFor);
        divDriver.appendChild(nomeP);
        divDriver.appendChild(telP);
        content.appendChild(divDriver);
    }
    //Tornar o primeiro motorista como principal a ser visto.
    document.querySelector('#motorista0').style.zIndex = '10';

    //Marcador Inicial da Página
    let marcadorAtual = 'motorista0';

    //Função de Evento para clicar no botão da direita
    document.querySelector('#btnRight').addEventListener('click', ()=>{
        //Marcador de qual motorista está sendo exibido
        let marcadorNumerico = parseInt(marcadorAtual[9]);

        //Condicional para não mudar a tela caso seja o último motorista da lista
        if (marcadorNumerico < objetoMotoristas.length-1){

            //Variável que armazena qual tela está sendo exibida no momento, e remove seu Z-Index
            let exibicaoAtual = document.querySelector('#motorista'+marcadorNumerico);
            exibicaoAtual.style.zIndex = '-1';

            //Marcador da próxima tela que será exibida, adicionando seu Z-Index
            let marcadorFuturo = marcadorNumerico + 1
            let exibicaoFutura = document.querySelector('#motorista'+marcadorFuturo);
            exibicaoFutura.style.zIndex = '10';

            //Reconfiguração do marcador Atual para o novo atual.
            marcadorAtual = 'motorista'+marcadorFuturo;
        }
    })
    //Função de Evento para clicar no botão da esquerda
    document.querySelector('#btnLeft').addEventListener('click', ()=>{
        let marcadorNumerico = parseInt(marcadorAtual[9]);

        //Condicional para não mudar a tela caso seja o primeiro motorista da lista
        if (marcadorNumerico > 0){

            //Variável que armazena qual tela está sendo exibida no momento, e remove seu Z-Index
            let exibicaoAtual = document.querySelector('#motorista'+marcadorNumerico);
            exibicaoAtual.style.zIndex = '-1';

            //Marcador da próxima tela que será exibida, adicionando seu Z-Index
            let marcadorFuturo = marcadorNumerico - 1
            let exibicaoFutura = document.querySelector('#motorista'+marcadorFuturo);
            exibicaoFutura.style.zIndex = '10';

            //Reconfiguração do marcador Atual para o novo atual.
            marcadorAtual = 'motorista'+ marcadorFuturo;
        }
    })

}
//Permite fechar a tela apenas clicando nela
document.querySelector('#btnClose').addEventListener('click', ()=>{
    let divMotorista = document.querySelector('#divMotorista');
    divMotorista.style.display = 'none'
    let body = document.querySelector('body');
    body.style.overflow = 'auto'
})

