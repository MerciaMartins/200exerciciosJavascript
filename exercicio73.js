// Exercício 73: Função de alta ordem que aplica callbacks no valor inicial a cada "n" milissegundos, repetindo um número de vezes especificado.

function aplicarCallbacksComIntervalo(vezes, callbacks, valorInicial, intervalo) {
    var resultado = valorInicial;
    var contador = 0;

    var id = setInterval(function() {
        for (var i = 0; i < callbacks.length; i++) {
            resultado = callbacks[i](resultado);
        }

        console.log("Após execução " + (contador + 1) + ": " + resultado);

        contador++;

        if (contador >= vezes) {
            clearInterval(id); 
            console.log("Resultado final:", resultado);
        }
    }, intervalo);
}

// Ex.: callbacks
function dobrar(x) {
    return x * 2;
}

function somarTres(x) {
    return x + 3;
}


var funcoes = [dobrar, somarTres];

aplicarCallbacksComIntervalo(3, funcoes, 1, 2000);
