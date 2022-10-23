
let diaSemana = new Date().getDay();

console.log(diaSemana)

let nomeDiaSemana;

//switch === escolha
switch (diaSemana) {
  case 0:
    nomeDiaSemana = 'domingo';
    break;
  case 1:
    nomeDiaSemana = 'segunda';
    break;
  case 2:
    nomeDiaSemana = 'terça';
    break;
  case 3:
    nomeDiaSemana = 'quarta';
    break;
  case 4:
    nomeDiaSemana = 'quinta';
    break;
  case 5:
    nomeDiaSemana = 'sexta';
    break;
  case 6:
    nomeDiaSemana = 'sábado';
    break;
}

document.write(`O dia da semana é: ${nomeDiaSemana}`)