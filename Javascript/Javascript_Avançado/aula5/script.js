
const clientes = [
  { name: 'Fulano', lastname: 'Da Silva', age: 14 },
  { name: 'Ciclano', lastname: 'Santos', age: 18},
  { name: 'Beltrano', lastname: 'Moreira', age: 20},
]

/* "IF ternário":
  "?" funciona como se fosse um "entao.. faça isso"
  ":" funciona como se fosse um "caso contrário.. faça isso"
*/
const clientesMaiores = clientes.filter(cliente => 
  //return cliente.age >= 18 ? true : false; OU:
  //return cliente.age >= 18; OU:
  cliente.age >= 18
)

console.log(clientesMaiores)