let cep = document.querySelector('#cep')

cep.onchange = function() {
  cep = cep.value

  const url = `https://viacep.com.br/ws/${cep}/json/`
  
  function transformandoEmJSON(response) {
    return response.json()
  }
  
  function exibindoDados(dados) {
    let logradouro = document.querySelector('#logradouro')
    let uf = document.querySelector('#uf')
    let cidade = document.querySelector('#cidade')
    let numero = document.querySelector('#numero')

    logradouro.value = dados.logradouro
    uf.value = dados.uf
    cidade.value = dados.localidade
    numero.value = dados.ddd
  }
  
  function exibindoErros() {
    console.log("ops, deu erro")
  }

  fetch(url)
    .then(transformandoEmJSON)
    .then(exibindoDados)
    .catch(exibindoErros)
}