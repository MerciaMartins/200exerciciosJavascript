// Exercício 74: Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.

function aplicarCallbackArray(callback, array) {
    var novoArray = [];

    for (var i = 0; i < array.length; i++) {
        novoArray.push(callback(array[i]));
    }

    return novoArray;
}

// Ex.: callback
function dobrar(x) {
    return x * 2;
}


var numeros = [1, 2, 3, 4, 5];
var resultado = aplicarCallbackArray(dobrar, numeros);

console.log("Array original:", numeros);   
console.log("Novo array:", resultado);     
