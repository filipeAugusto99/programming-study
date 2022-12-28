const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
}

const AlunoNotas = aluno.notas.reduce((soma, nota) => soma += nota, 0) / aluno.notas.length

console.log(`A média da ${aluno.nome} foi ${AlunoNotas.toFixed(2)} para o total de ${aluno.notas.length} bimestres.`)


