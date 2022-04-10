let stats = document.querySelector('#status');
let seletor = document.getElementById('ativo').textContent;
console.log(seletor)
if (seletor == 'online'){
    stats.innerHTML += '<h1 id=statusOn> Online </h1>'
    let statsOn = document.querySelector('#statusOn')
    statsOn.style.color = 'green'
} else if (seletor == 'offline') {
    stats.innerHTML += '<h1 id=statusOff> Offline </h1>'
    let statsOff = document.querySelector('#statusOff')
    statsOff.style.color = 'red'
}



