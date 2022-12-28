
const clientes = [
  { name: 'Fulano', lastname: 'Da Silva' },
  { name: 'Ciclano', lastname: 'Santos'},
  { name: 'Beltrano', lastname: 'Moreira'},
]

//['Fulano Da Silva', 'Ciclano Santos',]

let clientesFinal = [];
clientes.forEach(function(cliente){
  clientesFinal.push(cliente.name + ' ' + cliente.lastname);
})

console.log(clientesFinal)


//"map" sempre monta e percorre um array!
const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname);

console.log(clientesFinalMap);