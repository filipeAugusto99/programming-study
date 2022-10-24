
let listaAtores = [
  {
    nome: 'Keanu Reaves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },
  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },
  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Inicio',
  },
]

let htmlAtores = '';

for (let item of listaAtores) {

  htmlAtores += `
  <li>
    <h1>${item.nome}</h1><br>
    Interpreta o personagem ${item.personagem}
    no filme ${item.filme} <br>
  </li>
  `
}

document.querySelector('#atores').innerHTML = htmlAtores;