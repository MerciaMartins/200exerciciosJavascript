// Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.

function duplicarArray(arr) {
    let novoArray = [];
    for (let num of arr) {
        novoArray.push(num * 2);
    }
    return novoArray;
}


let numeros = [1, 2, 3, 4];
console.log("Array original:", numeros);
console.log("Array duplicado:", duplicarArray(numeros));
