// Exercício 16: Determinar o maior entre três números

let num1 = 15;
let num2 = 27;
let num3 = 9;

let maior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}

console.log("O maior número é:", maior);