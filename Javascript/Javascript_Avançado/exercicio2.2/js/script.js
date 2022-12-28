const average = 7

const studants = [
  {
    name: 'Maria',
    lastname: 'da Silva',
    grade: 10,
  },
  {
    name: 'José',
    lastname: 'Moreira',
    grade: 4,
  },
  {
    name: 'Paulo',
    lastname: 'Henrique',
    grade: 7,
  },
  {
    name: 'Pedro',
    lastname: 'Souza',
    grade: 5,
  }
]

const passedStudant = studants.filter(studant => studant.grade >= 7)
console.log(passedStudant)
