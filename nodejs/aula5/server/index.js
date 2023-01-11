const http = require('http')

const server = http.createServer(function(request, response) {
  console.log(request)
  response.end("Hello World!")
})

server.listen(8080)
console.log("Servidor executando na porta 8080")