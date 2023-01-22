/*
express é uma função, temos que chama-lá,
essa função irá retornar uma aplicação em express
*/
//MVC - MODEL VIEW CONTROLLER
const express = require("express")
const path = require("path")
const app = express()

//definindo o template engine
app.set('view engine', 'ejs')


//definindo os arquivos estaticos
/*
const staticFolder = path.join(__dirname, "views")
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
*/

//definindo os arquivos publicos
const publicFolder = path.join(__dirname, "public")
const expressPublic = express.static(publicFolder)
app.use(expressPublic)


//rotas

app.get("/", (req, res) => {
  res.render("index", {
    title: "Página Inicial",
    posts: [
      { 
        title: "Novidade no mundo da tecnologia", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga voluptatibus labore at cumque error odio numquam eaque excepturi non! Ipsam debitis facere accusantium, magnam aliquam nisi minima tenetur beatae.", 
      },

      { 
        title: "Criando um servidor com node.js", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga voluptatibus labore at cumque error odio numquam eaque excepturi non! Ipsam debitis facere accusantium, magnam aliquam nisi minima tenetur beatae.", 
      },

      { 
        title: "Javascript é a linguagem mais usada no mundo!", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga voluptatibus labore at cumque error odio numquam eaque excepturi non! Ipsam debitis facere accusantium, magnam aliquam nisi minima tenetur beatae.", 
      },
    ]
  })
})

app.get("/posts", (req, res) => {
  res.render("posts", {
    title: "Posts"
  })
})



//404 error (not found)
app.use((req, res) => { //middleware
  res.send("Página não encontrada!")
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))