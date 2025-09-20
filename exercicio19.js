// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.

let numero = 25;
let limiteInferior = 10;
let limiteSuperior = 50;

if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log(numero + " está dentro do intervalo [" + limiteInferior + ", " + limiteSuperior + "]");
} else {
    console.log(numero + " está fora do intervalo [" + limiteInferior + ", " + limiteSuperior + "]");
}