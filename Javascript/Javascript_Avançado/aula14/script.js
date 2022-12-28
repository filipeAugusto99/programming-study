

/*

ASYNC / AWAIT

--permite transformar determinada chamada assíncrona em síncrona

*/

function transformarEmJson(response) {
  return response.json()
}

function exibirNaTela(dados) {
  console.log(dados)
}

function exibirErro() {
  console.log('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
  method: 'POST',
  headers: {}
}

botaoCarregar.onclick = aoClicarNoBotao

//await == esperar
async function aoClicarNoBotao() {
  const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .catch(exibirErro)

  console.log(dados)
}



