// Exercício 98: Dado um array de strings e um array de palavras proibidas, retorne um novo array sem as palavras proibidas.


function removerPalavrasProibidas(array, proibidas) {
  return array.filter(palavra => !proibidas.includes(palavra));
}


const palavras = ["gato", "cachorro", "rato", "elefante"];
const palavrasProibidas = ["rato", "elefante"];

const resultado = removerPalavrasProibidas(palavras, palavrasProibidas);
console.log(resultado);
