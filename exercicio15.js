// Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.

// Palíndromo é uma palavra que permanece igual quando lida de trás para frente.
// Exemplos: "ovo", "radar", "ana", "mirim"

let palavra = "morango"; // Altere para testar outras palavras


let formatada = palavra.toLowerCase().replace(/\s/g, "");


let invertida = formatada.split("").reverse().join("");

if (formatada === invertida) {
  console.log(`"${palavra}" é um palíndromo.`);
} else {
  console.log(`"${palavra}" não é um palíndromo.`);
}
