
/*

Exercício 94: Dado um array de strings e um número n, retorne um novo array
contendo apenas as strings que têm mais de n caracteres.

*/

function filtrarPorTamanho(array, n) {
  return array.filter(str => str.length > n);
}

const palavras = ["cachorro", "gato", "elefante", "pássaro", "peixe"];
const resultado = filtrarPorTamanho(palavras, 5);

console.log(resultado);
