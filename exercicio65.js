// Exercício 65: Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback.

function somaComCallback(array, callback) {
    let soma = 0;
    for (let num of array) {
        soma += callback(num);
    }
    return soma;
}


let numeros = [1, 2, 3, 4, 5];

// Callback que dobra cada número
let resultado = somaComCallback(numeros, function(n) {
    return n * 2;
});

console.log("Soma com callback:", resultado);
