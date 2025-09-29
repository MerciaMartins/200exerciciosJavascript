// Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.

function aoQuadrado(arr) {
    let novoArray = [];
    for (let num of arr) {
        novoArray.push(num ** 2); // ou Math.pow(num, 2)
    }
    return novoArray;
}


let numeros = [1, 2, 3, 4];
console.log("Array original:", numeros);
console.log("Array ao quadrado:", aoQuadrado(numeros));
