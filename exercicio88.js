/*

Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto
a cada produto usando map(), e depois somando tudo com reduce().

*/


const precos = [10, 25, 50, 100];

// Adiciona 10% de imposto a cada produto
const comImposto = precos.map(preco => preco * 1.10);

// Soma todos os preços já com imposto
const total = comImposto.reduce((soma, preco) => soma + preco, 0);

console.log("Preços com imposto:", comImposto);
console.log("Total final:", total);
