
  let inputNumber = prompt("Digite um número");
  let number = parseInt(inputNumber);

  let result = '';

  for (let i = 1; i <= 10; i++) {
    result = number * i;
    document.write(number + 'x' + i + '=' + result + '<br>');
  }




