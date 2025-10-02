// Exercício 70: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor.

function aplicarCallbacks(callbacks, valor) {
    let resultados = [];
    for (let func of callbacks) {
        resultados.push(func(valor));
    }
    return resultados;
}

// Ex.: callbacks
function dobrar(x) {
    return x * 2;
}

function triplicar(x) {
    return x * 3;
}

function quadrado(x) {
    return x * x;
}


let funcoes = [dobrar, triplicar, quadrado];
let resultado = aplicarCallbacks(funcoes, 5);

console.log("Resultados:", resultado);
