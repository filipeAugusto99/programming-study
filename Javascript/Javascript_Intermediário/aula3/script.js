// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>';

//queryselector seleciona apenas 1 elemento

// SELETOR POR TAG
document.querySelector('a').innerHTML = '<b>teste ancora</b>';

// SELECIONANDO MAIS DE 1 ITEM POR TAG

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function (elemento) { //função anonima / callback
  elemento.innerHTML = 'teste';
})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

let count = 0
boxes.forEach(function (box, index) {
  box.innerHTML = 'box' + index;
})