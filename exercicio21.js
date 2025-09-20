// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.


// - Verão: Dezembro, Janeiro, Fevereiro
// - Outono: Março, Abril, Maio
// - Inverno: Junho, Julho, Agosto
// - Primavera: Setembro, Outubro, Novembro

function descobrirEstacaoPorNome(nomeMes) {
  nomeMes = nomeMes.toLowerCase();

  switch (nomeMes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
      return "Verão";
    case "março":
    case "abril":
    case "maio":
      return "Outono";
    case "junho":
    case "julho":
    case "agosto":
      return "Inverno";
    case "setembro":
    case "outubro":
    case "novembro":
      return "Primavera";
    default:
      return "Mês inválido. Digite o nome do mês corretamente.";
  }
}


let nomeMes = "Setembro";
console.log("Estação:", descobrirEstacaoPorNome(nomeMes));
