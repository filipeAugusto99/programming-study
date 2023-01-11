let h1 = document.querySelector('#h1')

let name = prompt('Informe o seu nome:')
let inputAge = prompt('Informe a sua idade:')

let age = parseInt(inputAge)

const biggerAge = 18;

if(age < biggerAge) {
  h1.innerHTML = `Olá ${name} , você é menor de idade`
} else if(age >= biggerAge) {
  h1.innerHTML = `Olá ${name}, você é maior de idade`
}