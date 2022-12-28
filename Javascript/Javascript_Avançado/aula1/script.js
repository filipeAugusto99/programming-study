
/* 

GLOBAL
LOCAL

- O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIAVEL

- AS FUNÇÕES NO JS CRIAM O SEU PRÓPRIO ESCOPO
  -AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSÍVEIS FORA DELA

*/

function teste() {
  a = 123;

}

teste();
console.log(a);