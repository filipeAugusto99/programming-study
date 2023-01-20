const button = document.querySelector(".button")

function transformandoEmJSON(response) {
  return response.json()
}

function exibindoMensagem(dados) {
  console.log(dados)
}

function mensagemDeErro() {
  console.log("ops, deu algum erro!")
}

const configs = { 
  method: "POST",
  headers: {}
}

button.onclick = () => 
fetch("https://jsonplaceholder.typicode.com/photos", configs)
  .then(transformandoEmJSON)
  .then(exibindoMensagem)
  .catch(mensagemDeErro)
