const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response) {
  console.log(request)
  
  if(request.url === "/") {
    fs.readFile("../client/index.html", function(error, content) {
      response.end(content)
  
    })}

  if(request.url === "/testing") {
    response.end("testando")
  }
})

server.listen(8080)
console.log("Servidor abrindo na porta 8080")