// Exercício 68: Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback.

function filtrarNumeros(array, callback) {
    let novoArray = [];
    for (let num of array) {
        if (callback(num)) {
            novoArray.push(num);
        }
    }
    return novoArray;
}


let numeros = [10, 15, 20, 25, 30];

// Callback que retorna apenas números maiores que 18
let maioresQue18 = filtrarNumeros(numeros, function(n) {
    return n > 18;
});

console.log("Array original:", numeros);
console.log("Números maiores que 18:", maioresQue18);
