// Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

// Regras:
// - Menores de 16 anos: não podem votar
// - De 16 a 17 anos ou mais de 70: voto opcional
// - De 18 a 70 anos: voto obrigatório

let idade = 15; 

if (idade < 16) {
  console.log("Você não pode votar.");
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  console.log("Voto opcional.");
} else {
  console.log("Voto obrigatório.");
}