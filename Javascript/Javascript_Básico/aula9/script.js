let inputNota1 = prompt('Digite a primeira nota');
let inputNota2 = prompt('Digite a segunda nota');

let nota1 = parseInt(inputNota1);
let nota2 = parseInt(inputNota2);

let mediaMinima = 7;

let media = (nota1 + nota2) / 2;
console.log(media);

if (media >= mediaMinima) {
  document.write('Passou de ano!');
} else if (media < mediaMinima) {
  document.write('Reprovado!');
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
  document.write('Incrível! Você mandou muito bem!!')
} else if (media >= mediaMinima && media === 9) {
  document.write('Voce mandou bem, mas ainda da pra melhorar!')
}
