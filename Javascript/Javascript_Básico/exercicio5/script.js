let h1 = document.querySelector('#h1')

let inputMultiplicationTable = prompt("Informe um número:")

multiplicationTable = parseInt(inputMultiplicationTable)

let result = 0;

if (!multiplicationTable) {
  alert('Por favor, digite um número válido')
} else {
  for (let i = 0; i <= 10; i++) {
    result = multiplicationTable * i;
    h1.innerHTML += `${multiplicationTable} x ${i} = ${result} <br>`
  }
}