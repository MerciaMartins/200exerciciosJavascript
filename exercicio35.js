// Exercício 35: Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2).


console.log("Os primeiros 10 números triangulares:");

for (let n = 1; n <= 10; n++) {
    let triangular = (n * (n + 1)) / 2;
    console.log(triangular);
}
