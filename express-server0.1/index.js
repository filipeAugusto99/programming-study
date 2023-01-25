//importando bibliotecas
const express = require('express')
const path = require('path')
const fs = require('fs')
const { stringify } = require('querystring')

const app = express()
app.set('view engine', 'ejs')

//definindo arquivos estáticos e públicos

//app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post
app.use(express.urlencoded({ extended: true }))

//definindo rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Digital Tech - Home'
  })
})

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Digital Tech - Posts',
    posts: [
      {
        title: "Novidade em um mundo de tecnologia",
        text: "Loremaklsmcaksmcasklcmalvdvsdvlmsvlm",
        stars: 2,
      },
      {
        title: "Novidade em um mundo de tecnologia",
        text: "Loremaklsmcaksmcasklcmalvdvsdvlmsvlm",
        stars: 5,
      },
      {
        title: "Novidade em um mundo de tecnologia",
        text: "Loremaklsmcaksmcasklcmalvdvsdvlmsvlm",
        stars: 0,
      },
    ]
  })
})

app.get('/cadastro-posts', (req, res) => {
  const {c} = req.query
  res.render('cadastro', {
    title: 'Digital Tech - Cadastro Post',
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

app.use((req, res) => {
  res.send("Página não encontrada!")
})

//definindo portas
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
