
let actors = document.querySelector('#atores')

let listActors = [
  {
    name: 'Keanu Reaves',
    character: 'Neo',
    movie: 'The Matrix',
  },
  {
    name: 'David Prowse',
    character: 'Darth Vader',
    movie: 'Star Wars Episódios IV-VI',
  },
  {
    name: 'Bruce Wayne',
    character: 'Batman',
    movie: 'Batman - O Inicio',
  },
]

let htmlAtors = '';

for (let item of listActors) {

  htmlAtors += `
  <li>
    <h1>${item.name}:</h1><br>
    Interpreta o personagem ${item.character}
    no filme ${item.movie} <br>
  </li>
  `
}

actors.innerHTML = htmlAtors
