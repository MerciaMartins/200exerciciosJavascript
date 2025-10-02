// Exercício 75: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa.


function aplicarCallbacksInverso(callbacks, valor) {
    var resultados = [];

    for (var i = callbacks.length - 1; i >= 0; i--) {
        resultados.push(callbacks[i](valor));
    }

    return resultados;
}

// Ex.: de funções de callback
function dobrar(x) {
    return x * 2;
}

function triplicar(x) {
    return x * 3;
}

function quadrado(x) {
    return x * x;
}


var funcoes = [dobrar, triplicar, quadrado];
var numero = 4;

var resultado = aplicarCallbacksInverso(funcoes, numero);

console.log("Resultados em ordem inversa:", resultado);

