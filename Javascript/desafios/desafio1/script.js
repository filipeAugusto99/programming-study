
let formulario = document.querySelector("#formCadastro")

formulario.onsubmit = function(evento) {
  evento.preventDefault()
  let haveError = false;
  let inputCEP = document.forms["formCadastro"]["cep"]

  if(!inputCEP.value) {
    haveError = true;
    inputCEP.classList.add("inputError")
    alert('CEP inválido')
    return
  } else {
    inputCEP.classList.remove("inputError")
  }
}

let cep = document.querySelector("#cep")

cep.onchange = function() {
  cep = document.querySelector("#cep").value
  if(cep.length === 8) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
  
    function transformandoEmJson(response) {
      return response.json()
    }
    
    function exibindoDados(data) {
      console.log(data)
      mostrandoNaTela(data)
    }
  
    function mostrandoNaTela(dados) {
      let logradouro = document.querySelector("#logradouro")
      console.log(logradouro)
      let cidade = document.querySelector("#cidade")
      let uf = document.querySelector("#uf")
      let numero = document.querySelector("#numero")
      
      logradouro.value = dados.logradouro
      cidade.value = dados.localidade
      uf.value = dados.uf
      numero.value = dados.ddd
    }
  
    function exibindoErro() {
      console.log("ops, cep inválido")
    }
  
    fetch(url)
      .then(transformandoEmJson)
      .then(exibindoDados)
      .catch(exibindoErro)
  }
  }


