//requires
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.set('view engine', 'ejs')
//definindo arquivos estáticos e públicos
//app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

//fazendo com que o servidor funcione com o method post
app.use(express.urlencoded({ extended: true }))

//definindo as rotas

app.get('/', (req, res) => {
  res.render('index', {
    title: "Digital Tech - HOME"
  })
})

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: "Digital Tech - POSTS",
    posts: [
      {
        title: 'Novidade no mundo da tecnologia',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat deleniti eum voluptatum magni minus vitae maxime ducimus voluptate praesentium quae saepe commodi, sint officiis omnis facilis recusandae iure architecto!',
      },
      {
        title: 'Criando um servidor em express',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat deleniti eum voluptatum magni minus vitae maxime ducimus voluptate praesentium quae saepe commodi, sint officiis omnis facilis recusandae iure architecto!'
      },
      {
        title: 'Javascript é uma das linguagens de programação mais utilizada na web',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat deleniti eum voluptatum magni minus vitae maxime ducimus voluptate praesentium quae saepe commodi, sint officiis omnis facilis recusandae iure architecto!'
      },
    ]
  })
})

app.get('/cadastro-posts', (req, res) => {
  const { c } = req.query
  res.render('cadastro-posts', {
    title: 'Digital Tech - Cadastro de Posts',
    cadastrado: c
  })
})

app.post('/salvar-post', (req, res) => {
  const { titulo, texto } = req.body
  const data = fs.readFileSync('./store/posts.json')
  const posts = JSON.parse(data)
  posts.push({
    titulo,
    texto
  })

  const postsString = JSON.stringify(posts)

  fs.writeFileSync('./store/posts.json', postsString)
  res.redirect('/cadastro-posts?c=1')
})

app.use((req, res) => {
  res.send('pagina nao encontrada')
})

//definindo portas
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))