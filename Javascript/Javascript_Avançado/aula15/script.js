

/*

DESTRUCTURING ASSIGNMENT (desestruturação de atribuição)

*/

const obj = {
  nome: 'fulano',
  idade: 35,
}

const { 
  nome: nomeDoUsuario, 
  idade,
} = obj

console.log(nomeDoUsuario)

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
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(transformarEmJson)
    .catch(exibirErro)

  const { name, email, phone } = dados

  console.log(name, email, phone)
}



