let clientes = [
  {
    nome: 'Thiago',
    idade: 35,
    linguagens: ['javascript', 'python', 'php']
  },
  {
    nome: 'Fulano',
    idade: 22,
    linguagens: ['c#', 'c++', 'c']
  },
  {
    nome: 'Ciclano',
    idade: 32,
    linguagens: ['go', 'closure', 'r']
  }
]

/*
  for (let contador = 0; contador <= clientes.length - 1; contador++) {
  console.log(clientes[contador].nome)
}
*/
//+ simplificado

let htmlClientes = '';

for (let cliente of clientes) {

  let listaLinguagens = '';

  for (let linguagem of cliente.linguagens) {
    listaLinguagens += `<li>${linguagem}</li>`
  }

  htmlClientes += `
    <li>
      <b>Nome:</b> ${cliente.nome}<br>
      <b>Idade:</b> ${cliente.idade}<br>
      <b>Linguagens</b> <br>
      <ul>
        ${listaLinguagens}
      </ul>
    </li>
  `

}

document.querySelector('#listaClientes').innerHTML = htmlClientes;