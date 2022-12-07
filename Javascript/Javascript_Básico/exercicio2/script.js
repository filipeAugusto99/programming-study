
let name = prompt('Digite o seu nome:');
let inputAge = prompt('Digite a sua idade:')

let age = parseInt(inputAge)

if (age >= 18 && name === 'Thomas Anderson' || age >= 18 && name === 'thomas anderson') {
  document.write(`Olá ${name}, você é maior de idade! HOOW! Você é um personagem do filme The Matrix!!`)
} else if (age >= 18) {
  document.write(`Olá ${name}, você é maior de idade!`)
} else {
  document.write(`Olá ${name}, você é menor de idade!`)
}



