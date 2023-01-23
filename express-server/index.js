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

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/products', (req, res) => {
  res.render('products')
})

app.get('/services', (req, res) => {
  res.render('services')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

//404 - error (not found)
app.use ((req, res) => { //middleware
  res.send("pagina não encontrada")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))