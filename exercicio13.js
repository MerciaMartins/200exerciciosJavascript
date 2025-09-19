// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa
// e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

// Fórmula do IMC: IMC = peso / (altura * altura)
// Classificação padrão da OMS:
// - Abaixo de 18.5: Abaixo do peso
// - De 18.5 a 24.9: Peso normal
// - De 25 a 29.9: Sobrepeso
// - 30 ou mais: Obesidade

let peso = 60; // em kg
let altura = 1.75; // em metros

let imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
