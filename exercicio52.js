// Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.

function fibonacci(n) {
    let a = 0, b = 1, resultado;

    if (n === 0) return a;
    if (n === 1) return b;

    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return resultado;
}


console.log(fibonacci(7)); 