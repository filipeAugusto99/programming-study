
let name = prompt('Digite o seu nome:');
let inputAge = prompt('Digite a sua idade:')

let age = parseInt(inputAge)

if (age >= 18) {
  document.write(`Olá ${name}, você é maior de idade!`)
} else {
  document.write(`Olá ${name}, você é menor de idade!`)
}