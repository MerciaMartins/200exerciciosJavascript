// Exercício 71: Escreva uma função que aceite uma função de callback e um número, e execute a função de callback após um certo número de milissegundos especificados pelo número.

function executarDepois(callback, milissegundos) {
    setTimeout(callback, milissegundos);
}


executarDepois(function() {
    console.log("Executado após 2 segundos!");
}, 2000);
