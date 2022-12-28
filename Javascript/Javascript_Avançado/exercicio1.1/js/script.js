const studants = [
  {
    name: 'Maria',
    lastname: 'da Silva',
  },
  {
    name: 'José',
    lastname: 'Moreira',
  },
  {
    name: 'Paulo',
    lastname: 'Henrique',
  },
  {
    name: 'Pedro',
    lastname: 'Souza',
  }
]

const nameConcatenad = studants.map(studant => studant.name + " " + studant.lastname)
console.log(nameConcatenad)