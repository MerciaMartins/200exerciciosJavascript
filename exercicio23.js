// Exercício 23: Escreva um programa que verifica as cores de um semáforo.


// O usuário deve informar a cor (vermelho, amarelo ou verde).
// - "Pare" para vermelho
// - "Atenção" para amarelo
// - "Siga" para verde

function verificarSemaforo(cor) {
  cor = cor.toLowerCase(); 

  switch (cor) {
    case "vermelho":
      return "Pare";
    case "amarelo":
      return "Atenção";
    case "verde":
      return "Siga";
    default:
      return "Cor inválida. Digite vermelho, amarelo ou verde.";
  }
}

let corInformada = "Verde"; // Troque aqui para testar outras cores
console.log(verificarSemaforo(corInformada));
