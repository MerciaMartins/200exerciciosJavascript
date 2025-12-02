/*

Exercício 92: Dado um array de objetos que têm várias propriedades,
crie uma função que retorne um novo array contendo apenas os valores de uma propriedade específica.

*/

function extrairPropriedade(array, propriedade) {
  return array.map(item => item[propriedade]);
}

const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
  { nome: "Camiseta", preco: 50, categoria: "Vestuário" },
  { nome: "Bicicleta", preco: 900, categoria: "Esportes" }
];

const nomes = extrairPropriedade(produtos, "nome");
const precos = extrairPropriedade(produtos, "preco");

console.log(nomes);
console.log(precos);
