
const clientes = [
  { name: 'Thiago', score: 34 },
  { name: 'Jaqueline', score: 38},
  { name: 'Sarah', score: 80},
  { name: 'Clara', score: 50},
  { name: 'Sophia', score: 98}
]

//acc = accumulator/acumulador
//curr = current/atual

const clientesFinais = clientes.reduce((acc, curr) => {

  if(curr.score >= 50) {
    acc.pass.push(curr)
  } else {
    acc.fail.push(curr)
  }

  return acc

}, {
  pass: [],
  fail: []
})

console.log(clientesFinais)


const numeros = [1, 2, 3, 4]

// '2 - 3 - 4 - 5'

const numerosFinal = numeros.reduce((acc, curr) => {

  if (curr <= 3) {
    acc += `${curr + 1 + "-"}`
  } else {
    acc += `${curr + 1}`
  }
  return acc
}, '')

console.log(numerosFinal)