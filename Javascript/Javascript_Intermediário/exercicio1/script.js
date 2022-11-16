
const botaoIncrement = document.querySelector('#botaoIncrement');
const botaoDecrement = document.querySelector('#botaoDecrement');
const counter = document.querySelector('#counterValue');

let contador = 0;

function somando() {
  contador ++;
  counter.value = contador;
}

function subtraindo() {
  contador --;
  counter.value = contador;
}

botaoIncrement.addEventListener('click', somando);

botaoDecrement.addEventListener('click', subtraindo);