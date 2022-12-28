
document.getElementById('filtragem').addEventListener('click', filtrandoNotas)

let list = document.querySelector('.list')
const inputNota = document.querySelector('#nameStudant')

const alunos = [
  {
    nome: 'Filipe',
    sobrenome: 'Augusto da Silva',
    nota: 6,
  },
  {
    nome: 'Maria',
    sobrenome: 'Da Silva',
    nota: 10,
  },
  {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
  },
  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
  },
  {
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5,
  },
  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 9,
  },
  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 7,
  },
  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 6,
  },
  {
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3,
  },
]

function filtrandoNotas(e) {
  event.preventDefault(e)
  const grade = inputNota.value
  const filterGrade = alunos.reduce((acc, curr) => { 
  
  if(curr.nota === parseInt(grade)) {
    acc.pass.push(curr)
  } else {
    acc.fail.push(curr)
  }

  return acc
}, {
  pass: [],
  fail: [],
})

list.innerHTML = ""

  if(filterGrade.pass.length === 0) {
    list.innerHTML = "Nota inexistente"
  } 
  filterGrade.pass.forEach(aluno => {
    list.innerHTML += `
    <li>${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota}</li>
    `
  })

  inputNota.value = ''
}

