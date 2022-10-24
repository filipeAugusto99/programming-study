
let nome = prompt('Digite o seu nome:');
let inputIdade = prompt('Digite a sua idade:')

let idade = parseInt(inputIdade)

if (idade >= 18 && nome === 'Thomas Anderson' || idade >= 18 && nome === 'thomas anderson') {
  document.write(`Olá ${nome}, você é maior de idade! HOOW! Você é um personagem do filme The Matrix!!`)
} else if (idade >= 18) {
  document.write(`Olá ${nome}, você é maior de idade!`)
} else {
  document.write(`Olá ${nome}, você é menor de idade!`)
}



