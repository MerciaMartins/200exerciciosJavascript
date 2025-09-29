// Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.

function somaImpares(arr) {
    let soma = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            soma += num;
        }
    }
    return soma;
}


let numeros = [1, 2, 3, 4, 5, 6];
console.log("Array:", numeros);
console.log("Soma dos números ímpares:", somaImpares(numeros));
