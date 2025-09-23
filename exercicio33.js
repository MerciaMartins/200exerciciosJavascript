// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let n1 = 0;
let n2 = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    let proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
}
