/*

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'Filipe';
console.log(nome);

//string concatenada

let sobrenome = 'Augusto';
//console.log(nome + " " +sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`);

//number
let idade = 22;
console.log(idade);

console.log(idade + 10);

//number - float
let porcentagem = 20.2;
console.log(porcentagem + '%');

//boolean (true ou false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

//array, é como se fosse uma gaveta que guarda muitas coisas

let habilidades = ['Javascript', 'Java', 'Python'];
console.log(habilidades);
//para saber a quantidade da array:
console.log(habilidades.length);
//para acessar a posição  de algum item da array, utilizar = []
console.log(habilidades[2]);

//object
let pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  idade: 25,
  habilidades: ['c++', 'c#', 'python']
}
console.log(pessoa.sobrenome);
console.log(pessoa.habilidades[0]);

//JSON (Javascript Object Notation)

// undefined
//a variavel foi declarada, mas nao foi definida!
let endereco;
console.log(endereco);

//null
let cidade = null;
console.log(cidade);