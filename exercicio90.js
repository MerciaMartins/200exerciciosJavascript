/* 

Exercício 90: Dado um array que contém vários elementos duplicados,
 crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.
 
 */


function removerDuplicatas(array) {
  return [...new Set(array)];
}

const numeros = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

console.log(removerDuplicatas(numeros));
