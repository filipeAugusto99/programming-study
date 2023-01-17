/*
const media = 7;

const studants = [
  {
    name: "Filipe",
    lastName: "Augusto",
    grade: 7,
  },
  {
    name: "Maria",
    lastName: "José",
    grade: 10,
  },

  {
    name: "Ana",
    lastName: "Clara",
    grade: 10,
  },
  
  {
    name: "Erika",
    lastName: "Sebastiana",
    grade: 4,
  },
]


const nameLastname = studants.map(studant => (studant.name + " " + studant.lastName))
console.log(nameLastname)
*/

/*
const mediaStudant = studants.filter(studant => studant.grade >= media)

console.log(mediaStudant)
*/

/*
const studant = {
  name: "Carla",
  lastName: "Costa",
  grades: [10, 9, 5, 4, 7, 7],
}

const gradesStudant = studant.grades.reduce((acc, curr) => {
  acc += curr
  return acc
}, 0) / studant.grades.length

console.log("A média da " + studant.name+" foi " +Math.round(gradesStudant) + 
" para o total de " + studant.grades.length + " bimestres")


const buttonFilter = document.querySelector("#buttonFilter")
const grade = document.querySelector(".grade")

let showingGrades = document.querySelector(".showingGrades")

const studants = [
  {
    name: "Filipe",
    lastName: "Augusto",
    grade: 7,
  },
  {
    name: "Maria",
    lastName: "José",
    grade: 10,
  },

  {
    name: "Ana",
    lastName: "Clara",
    grade: 10,
  },
  
  {
    name: "Erika",
    lastName: "Sebastiana",
    grade: 4,
  },

  {
    name: "Renato",
    lastName: "Barros",
    grade: 7,
  },

  {
    name: "Bianque",
    lastName: "Lancherburgos",
    grade: 3,
  }
]

buttonFilter.onclick = function filter() {
  showingGrades.innerHTML = ""
  const filterGrades = studants.filter(studant => 
    studant.grade === parseInt(grade.value))
  if(filterGrades.length) {

    filterGrades.forEach(item => {
      
      showingGrades.innerHTML += 
      `
      <li>${item.name} ${item.lastName} | Nota: ${item.grade}</li>
      `
    
  })
  } else {
    showingGrades.innerHTML += 
    `
    <li>Não existem estudantes com a nota especificada</li>
    `
  }
}
*/

function exibindoMensagem() {
  console.log("ok, parece que funcionou")
}

creatingPromises().then(exibindoMensagem)

function creatingPromises() {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response()
    }, 10000)
  })
}
