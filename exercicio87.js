/*

Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares,
combine-os e em seguida, filtre apenas os números que são múltiplos de 5.

*/

const pares = [2, 4, 6, 8, 10, 20, 30];
const impares = [1, 3, 5, 7, 9, 15, 25];

// Combina os dois arrays
const combinado = pares.concat(impares);

// Filtra os múltiplos de 5
const multiplosDe5 = combinado.filter(num => num % 5 === 0);

console.log(multiplosDe5);
