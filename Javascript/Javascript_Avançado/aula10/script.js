

/*

AJAX - 2005

Asynchronous Javascript And XML

ROTAS

ENDPOINT

*/

const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
  //200 = 'ok / tudo certo'
  if(this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText)

    console.log(response[0])
    console.log(response[499])
  }
}

//assíncrono = true
//sincrono = false
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //abre uma conexão
xhttp.send() //envia uma conexão

