
let botaoTeste = document.querySelector('#botaoTeste');

function cliqueBotao() {
  console.log('mensagem 1')

  botaoTeste.removeEventListener('click', cliqueBotao)
}

// addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

// onclick

// botaoTeste.onclick = cliqueBotao;