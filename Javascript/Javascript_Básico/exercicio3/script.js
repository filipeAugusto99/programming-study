let button = document.querySelector("#button")
let h1 = document.querySelector("#h1")

button.onclick = function nameAndAge() {
  let name = prompt("Informe o seu nome:")
  let inputAge = prompt("Informe a sua idade:")
  let age = parseInt(inputAge)
  
  const biggerAge = 18;

  if(age >= biggerAge && name === "Thomas Anderson") {
    h1.innerHTML = `Olá ${name}, você é maior de idade e interpreta o Neo no filme The Matrix!`
  } else if (age >= biggerAge && name === "thomas anderson"){
    h1.innerHTML = `Olá ${name}, você é maior de idade e interpreta o Neo no filme The Matrix!`
  } else if (age >= biggerAge) {
    h1.innerHTML = `Olá ${name}, você é maior de idade!`
  } else {
    h1.innerHTML = `Olá ${name}, você é menor de idade!`
  }
}