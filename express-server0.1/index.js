//importando bibliotecas
const express = require('express')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')

//definindo arquivos estáticos e públicos

//app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

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

app.use((req, res) => {
  res.send("Página não encontrada!")
})

//definindo portas
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
