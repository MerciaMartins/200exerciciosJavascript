
// Exercício 38: Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais.

let i = 1;
let soma = 0;

do {
    soma += i ** 3; // ou Math.pow(i, 3)
    i++;
} while (i <= 10);

console.log("A soma dos cubos dos primeiros 10 números naturais é:", soma);
