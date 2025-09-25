// Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.

let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let matrizSoma = [];
let i = 0;

do {
    matrizSoma[i] = [];
    for (let j = 0; j < matrizA[i].length; j++) {
        matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
    }
    i++;
} while (i < matrizA.length);

console.log("Matriz A:", matrizA);
console.log("Matriz B:", matrizB);
console.log("Soma das matrizes:", matrizSoma);
