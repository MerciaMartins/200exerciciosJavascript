// Exercício 66: Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.

function filtrarArray(array, callback) {
    let novoArray = [];
    for (let item of array) {
        if (callback(item)) {
            novoArray.push(item);
        }
    }
    return novoArray;
}

let numeros = [1, 2, 3, 4, 5, 6];

// Callback que retorna apenas números pares
let pares = filtrarArray(numeros, function(n) {
    return n % 2 === 0;
});

console.log("Array original:", numeros);
console.log("Apenas pares:", pares);
