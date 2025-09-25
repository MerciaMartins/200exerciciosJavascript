// Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não.

let numero = 12321; // você pode trocar para testar
let original = numero;
let reverso = 0;

while (numero > 0) {
    let digito = numero % 10;          // pega o último dígito
    reverso = reverso * 10 + digito;   // constrói o número ao contrário
    numero = Math.floor(numero / 10);  // remove o último dígito
}

if (original === reverso) {
    console.log(original + " é um palíndromo ✅");
} else {
    console.log(original + " não é um palíndromo ❌");
}
