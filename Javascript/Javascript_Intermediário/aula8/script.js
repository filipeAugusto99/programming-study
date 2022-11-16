
let contador = document.querySelector('#contador');

let count = 0;


let intervalo = setInterval(function(iniciar) {
  count++
  contador.innerText = count;
}, 1000)

let botaoPausar = document.querySelector('#botaoPausar');
let botaoIniciar = document.querySelector('#botaoIniciar');

botaoPausar.onclick = function(){
  clearInterval(intervalo);
}
