// Exercício 56: Escreva uma função que retorne o maior número em um array de números.

function maiorNumero(arr) {
    return Math.max(...arr);
}


let numeros = [10, 5, 3, 22, -7, 15];
console.log("Array:", numeros);
console.log("Maior número:", maiorNumero(numeros));
