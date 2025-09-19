// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

// Regras:
// - Média abaixo de 5: Reprovado
// - Média entre 5 e 6.9: Recuperação
// - Média 7 ou mais: Aprovado

let mediaFinal = 8.2; 

if (mediaFinal < 5) {
  console.log("Reprovado");
} else if (mediaFinal < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}