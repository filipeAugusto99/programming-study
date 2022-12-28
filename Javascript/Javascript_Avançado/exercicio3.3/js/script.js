
const studant = {
  name: 'Maria',
  lastName: 'da Silva',
  grade: [7, 10, 8, 5, 7, 9],
}

const averageGrade = Math.round(studant.grade.reduce((acc, curr) => acc += curr, 0) / studant.grade.length)

console.log(`A média da ${studant.name} foi ${averageGrade} para o total de ${studant.grade.length} bimestres`)