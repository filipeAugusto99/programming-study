let formulario = document.querySelector('#formCadastro');
let estados = document.querySelector('#estados');
let cidades = document.querySelector('#cidades');

formulario.onsubmit = function(evento){
  evento.preventDefault()

  let selectEstado = document.forms['formCadastro']['estados']

  if(!selectEstado.value) {
    selectEstado.classList.add('inputError')
    
    let span = selectEstado.nextSibling.nextSibling
    span.innerHTML = 'Digite pelo menos 1 Estado'
  } else {
    selectEstado.classList.remove('inputError')

    let span = selectEstado.nextSibling.nextSibling
    span.innerText = '';
  }
}

function rj() {
  cidades.innerHTML = `
  <label > Cidade
    <select >
      <option>-- Selecione --</option>
      <option>Teresópolis</option>
      <option>Resende</option>
      <option>Maricá</option>
      <option>Macaé</option>
    </select>
  </label>
  `
}

function sp() {
  cidades.innerHTML = `
  <label > Cidade
    <select >
      <option>-- Selecione --</option>
      <option>Jundiaí</option>
      <option>Campinas</option>
      <option>Limeira</option>
      <option>Atibaia</option>
    </select>
  </label>
  `
}

estados.onchange = function(){
  if(estados.value === 'Rio de Janeiro') {
    rj()
  } else if(estados.value === 'São Paulo') {
    sp()
  }
}


