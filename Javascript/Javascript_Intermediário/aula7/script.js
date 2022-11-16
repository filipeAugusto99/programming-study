

let toast = document.querySelector('.toast');
let botaoCadastrar = document.querySelector('#botaoCadastrar');

function removerToast() {
  toast.classList.remove('visible')
}

botaoCadastrar.onclick = function(){
  toast.classList.add('visible');
  
  let valor = document.getElementById('tarefa').value;
  
  document.querySelector('#coloqueAq').innerHTML = `Tarefa ${valor} cadastrada com sucesso`
  
  setTimeout(removerToast, 5000);
} 