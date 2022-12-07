let button = document.getElementById("button").addEventListener("click", clickEvent)
let h1 = document.querySelector("#h1")

function clickEvent() {

  let name = prompt('Digite o seu nome:');
  let inputAge = prompt('Digite a sua idade:')

  let age = parseInt(inputAge)

  if (age >= 18 && name === 'Thomas Anderson' || age >= 18 && name === 'thomas anderson') {
    h1.innerHTML = (`Olá ${name}, você é maior de idade!</h1><h2>HOOW! Você é um personagem do filme The Matrix!!`)
  } else if (age >= 18) {
    h1.innerHTML = (`Olá ${name}, você é maior de idade!`)
  } else if (age < 18) {
    h1.innerHTML = (`Olá ${name}, você é menor de idade!`)
  } else if (age === undefined && name === undefined) {
    document.write('')
  } else {
    alert('Digite os campos corretamente!')
  }
}





