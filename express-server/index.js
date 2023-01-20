/*
express é uma função, temos que chama-lá,
essa função irá retornar uma aplicação em express
*/
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/about", (req, res) => {
  res.send("about")
})

//404 error (not found)
app.use((req, res) => { //middleware
  res.send("Página não encontrada!")
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))