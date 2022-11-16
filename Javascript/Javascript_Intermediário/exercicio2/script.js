
const botaoIncrement = document.querySelector('#botaoIncrement');
const botaoDecrement = document.querySelector('#botaoDecrement');
const counter = document.querySelector('#counterValue');

let contador = 0;
let intervalo1 = null;
let intervalo2 = null;

function somando() {
  botaoDecrement.classList.remove('cor2');
  botaoIncrement.classList.add('cor');
  
  intervalo1 = setInterval(function(){
  contador ++;
  counter.value = contador;
  }, 100)
  
  clearInterval(intervalo2)
  
}


function subtraindo() {
  botaoIncrement.classList.remove('cor');
  botaoDecrement.classList.add('cor2');

  intervalo2 = setInterval(function(){
  contador --;
  counter.value = contador;
  }, 100)
  clearInterval(intervalo1)
}

botaoIncrement.addEventListener('click', somando);

botaoDecrement.addEventListener('click', subtraindo);