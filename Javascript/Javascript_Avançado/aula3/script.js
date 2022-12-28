
/*

ARROW FUNCTIONS

ES6 - version js

As funções de seta nos permitem escrever uma sintaxe de função
mais curta.

*/

//retorno implícito
const soma = (param1, param2) => param1 + param2;

const resultado = soma(10, 2);

console.log(resultado);

// quando tem 1 parametro pode remover os parênteses
const teste = param1 => param1;

console.log(teste('ok'));

const botao = document.querySelector('#botao')

botao.onclick = () => {
  console.log(this)
}