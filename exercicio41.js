// Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.

let numero = 25; // você pode trocar para testar
let binario = "";

do {
    let resto = numero % 2;       // pega o resto da divisão por 2
    binario = resto + binario;    // adiciona à esquerda
    numero = Math.floor(numero / 2); // divide o número por 2 (inteiro)
} while (numero > 0);

console.log("Número decimal:", 25);
console.log("Número em binário:", binario);
