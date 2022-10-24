
function clickEvent() {

  let nome = prompt('Digite o seu nome:');
  let inputIdade = prompt('Digite a sua idade:')

  let idade = parseInt(inputIdade)

  if (idade >= 18 && nome === 'Thomas Anderson' || idade >= 18 && nome === 'thomas anderson') {
    document.write(`<h1>Olá ${nome}, você é maior de idade!</h1><h2>HOOW! Você é um personagem do filme The Matrix!!</h2>`)
  } else if (idade >= 18) {
    document.write('<h1>' + `Olá ${nome}, você é maior de idade!` + '</h1>')
  } else if (idade < 18) {
    document.write('<h1>' + `Olá ${nome}, você é menor de idade!` + '</h1>')
  } else if (idade === undefined && nome === undefined) {
    document.write('')
  } else {
    alert('Digite os campos corretamente!')
  }
}





