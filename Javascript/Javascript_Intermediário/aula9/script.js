
let formulario = document.querySelector('#formCadastro');

formulario.onsubmit = function(evento){
  evento.preventDefault();

  let temErro = false;

  let inputNome = document.forms['formCadastro']['nome'];

  if (!inputNome.value) {
    temErro = true;
    inputNome.classList.add('inputError');

    let span = inputNome.nextSibling.nextSibling;
    span.innerText = 'Digite o nome corretamente';
  } else {
    inputNome.classList.remove('inputError');

    let span = inputNome.nextSibling.nextSibling;
    span.innerText = '';
  }

  let inputEmail = document.forms['formCadastro']['email'];

  if (!inputEmail.value) {
    temErro = true;
    inputEmail.classList.add('inputError');

    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = 'Digite o email corretamente';
  } else {
    inputEmail.classList.remove('inputError');

    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = '';
  }

  let inputSelect = document.forms['formCadastro']['cidade'];

  if (!inputSelect.value) {
    temErro = true;
    inputSelect.classList.add('inputError');

    let span = inputSelect.nextSibling.nextSibling;
    span.innerText = 'Selecione pelo menos uma cidade';
  } else {
    inputSelect.classList.remove('inputError');

    let span = inputSelect.nextSibling.nextSibling;
    span.innerText = '';
    }

    if (!temErro) {
      formulario.submit()
    }

}


