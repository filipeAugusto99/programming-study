const loadButton = document.querySelector("#botaoCarregar")












/**
 *  adição do método "then" e "catch"
 * ************
/* PROMISES 
***************
function exibirNaTela(dados) {
  console.log('exibindo dados', dados)
}

function exibirErro() {
  console.log("Ops, deu erro")
}

loadButton.onclick = () => fetch("https://jsonplaceholder.typicode.com/photos", "GET").then(exibirNaTela).catch(exibirErro)

/*nao recebe mais callback como parâmetro*/
/*
function fetch() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    
    xhttp.onreadystatechange = function() {
  
      if(this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        resolve(response)
      }

      if(this.status === 404) {
        reject()
      }
    }
    
    xhttp.open(method, url, true)
    xhttp.send()
  })
}
*/


/********** 
CALLBACK
***********

const loadButton = document.querySelector("#botaoCarregar")

loadButton.onclick = () => carregarFotos(exibirNaTela)

function exibirNaTela(dados) {
  console.log('exibindo dados', dados)
}

function carregarFotos(callback) {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      if(callback) {
        callback(response)
      }
    }
  }
  
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
  xhttp.send()
}

*/


/***********
  AJAX
************
const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {

  if(this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText)
    console.log(response[0])
    console.log(response[300])
  }
}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true)
xhttp.send()
 */