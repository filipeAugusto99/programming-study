
function tabuada() {
  let inputNumero = prompt("Digite um número");
  let numero = parseInt(inputNumero);

  let resultado = '';

  for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    document.write(numero + 'x' + i + '=' + resultado + '<br>');
  }
}




