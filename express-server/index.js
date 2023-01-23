const express = require('express')
const path = require('path')
const app = express()

//definindo o template engine
app.set('view engine', 'ejs')

//definindo rotas estáticas e públicas
//1 forma
/*
const staticFolder = path.join(__dirname, 'views')
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
*/
//2 forma (+resumida)
app.use(express.static(path.join(__dirname, 'public')))


//rotas
app.get('/', (req, res) => {
  res.render('index') 
}) 

app.get('/posts', (req, res) => {
  res.render('posts')
})

//404 - error (not found)
app.use ((req, res) => { //middleware
  res.send("pagina não encontrada")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log("Server is listening on port 8080"))