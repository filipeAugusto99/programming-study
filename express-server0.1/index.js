const express = require('express')
const path = require('path')

const app = express()

//definindo template ejs
app.set('view engine', 'ejs')

//definindo rotas estáticas e públicas
//app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

//definindo as rotas
app.get("/", (req, res) => {
  res.render("index", {
    title: "Digital Tech - Home",
  })
})

app.get("/posts", (req, res) => {
  res.send("Posts")
})

app.use((req, res) => {
  res.send("pagina não encontrada")
})

//definindo a porta
const port = process.env.PORT || 8080
app.listen(port, () => console.log( `Server is listening on port ${port}`))
