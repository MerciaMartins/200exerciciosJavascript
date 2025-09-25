// Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.

let binario = "11001"; // exemplo (25 em decimal)
let decimal = 0;

// percorre a string de trás pra frente
for (let i = 0; i < binario.length; i++) {
    let digito = parseInt(binario[binario.length - 1 - i]);
    decimal += digito * (2 ** i);
}

console.log("Número binário:", binario);
console.log("Número em decimal:", decimal);
