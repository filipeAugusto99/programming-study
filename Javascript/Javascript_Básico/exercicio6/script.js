const actors = document.querySelector('.ul')

let listActors = [
  {
    name: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },
  {
    name: 'Hayden Christensen',
    personagem: 'Anakin Skywalker',
    filme: 'Star Wars',
  },
  {
    name: 'Tobey Maguire',
    personagem: 'Spider-Man',
    filme: 'Spider-Man',
  }
]

let htmlActors = ""

for (let i = 0; i < listActors.length - 2; i++) {
  listActors.forEach((actors) => {
    htmlActors += `
      <li>
        <h1>${actors.name}</h1>
        <p>Interpreta o personagem ${actors.personagem} no filme ${actors.filme}</p>
      </li>
      `
  })
}

console.log(htmlActors)
actors.innerHTML = htmlActors;