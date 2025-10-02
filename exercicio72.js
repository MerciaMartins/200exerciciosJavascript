// Exercício 72: Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

function aplicarCallbacksRepetidamente(vezes, callbacks, valorInicial) {
    var resultado = valorInicial;

    for (var i = 0; i < vezes; i++) {
        for (var j = 0; j < callbacks.length; j++) {
            resultado = callbacks[j](resultado);
        }
    }

    return resultado;
}

// Ex.: de callbacks
function dobrar(x) {
    return x * 2;
}

function somarTres(x) {
    return x + 3;
}


var funcoes = [dobrar, somarTres];
var resultadoFinal = aplicarCallbacksRepetidamente(2, funcoes, 1);

console.log("Resultado final:", resultadoFinal);
