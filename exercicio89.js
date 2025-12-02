/*

Exercício 89: Dada uma string com várias palavras separadas por espaços,
transforme-a em um array e depois retorne a palavra mais longa.

*/

const frase = "Aprendendo JavaScript e melhorando minhas habilidades de programação";

// Transforma a string em array
const palavras = frase.split(" ");

// Encontra a palavra mais longa
const palavraMaisLonga = palavras.reduce((maior, atual) => {
  return atual.length > maior.length ? atual : maior;
});

console.log("Palavra mais longa:", palavraMaisLonga);
