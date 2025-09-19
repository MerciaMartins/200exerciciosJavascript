// Exercício 14: Escreva um programa que verifica se um ano é bissexto.

// Regras para ano bissexto:
// - É divisível por 4
// - Não pode ser divisível por 100, **a menos que** também seja divisível por 400

let ano = 2025; 

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}