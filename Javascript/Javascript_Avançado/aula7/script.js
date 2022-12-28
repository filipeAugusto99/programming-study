
/*

JSON

Javascript Object Notation // Padrão de comunicação entre sistemas/linguagens de programação


*/

const objeto = {
  nome: 'fulano',
  idade: 23,
}

const json = JSON.stringify(objeto)

const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)

