const express = require('express')
const path = require('path')
const fs = require('fs')

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

//fazendo midleware - habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({extended: true}))

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Digital Tech - Home'
  }) 
}) 

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Digital Tech - Sobre'
  })
})

app.get('/products', (req, res) => {
  res.render('products', {
    title: 'Digital Tech - Produtos'
  })
})

app.get('/services', (req, res) => {
  res.render('services', {
    title: 'Digital Tech - Serviços'
  })
})

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Digital Tech - Posts',
    posts: [
      { 
        title: 'Novidade no mundo da tecnologia', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius ad incidunt odit nam quaerat minima quam ducimus assumenda, illo, ipsum saepe. Eligendi ad temporibus officia reprehenderit repudiandae corrupti officiis.', 
        stars: 1
      },
      { 
        title: 'Criando um servidor com node.js', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius ad incidunt odit nam quaerat minima quam ducimus assumenda, illo, ipsum saepe. Eligendi ad temporibus officia reprehenderit repudiandae corrupti officiis.', 
      },
      { 
        title: 'Javascript é a linguagem mais utilizada no ', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius ad incidunt odit nam quaerat minima quam ducimus assumenda, illo, ipsum saepe. Eligendi ad temporibus officia reprehenderit repudiandae corrupti officiis.', 
        stars: 4
      },
    ]
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Digital Tech - Contato'
  })
})

app.get('/cadastro-posts', (req, res) => {
  const { c } = req.query
  res.render('cadastro-posts', {
    title: 'Digital Tech - Cadastro de Posts',
    cadastrado: c,
  })
})

app.post('/salvar-post', (req, res) => {
  const { titulo, texto } = req.body
  
  const data = fs.readFileSync('./store/posts.json')

  const posts = JSON.parse(data)
  posts.push({
    titulo,
    texto,
  })

  const postsString = JSON.stringify(posts)
  fs.writeFileSync('./store/posts.json', postsString)

  res.redirect('/cadastro-posts?c=1')
})

//404 - error (not found)
app.use ((req, res) => { //middleware
  res.send("pagina não encontrada")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))