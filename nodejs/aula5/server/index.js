const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response) {
  console.log(request.url)
  if(request.url === "/") {
  fs.readFile("../client/index.html", function(error, content) {
    response.end(content)
  })
  }

  if(request.url === "/teste") {
    response.end("Respondi outra aba")
  }
})

server.listen(8080)
console.log("Servidor executando na porta 8080")