// Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número.

let numero = 5; // você pode trocar o valor para testar
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + " é " + fatorial);
