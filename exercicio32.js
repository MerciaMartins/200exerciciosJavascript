// Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jogar() {
  return new Promise((resolve) => {
    rl.question("Escolha: pedra, papel ou tesoura (ou 'sair' para encerrar): ", (jogador) => {
      jogador = jogador.toLowerCase();

      if (jogador === "sair") {
        resolve("sair");
        return;
      }

      const opcoes = ["pedra", "papel", "tesoura"];
      const computador = opcoes[Math.floor(Math.random() * 3)];

      console.log(`Computador escolheu: ${computador}`);

      if (jogador === computador) {
        console.log("Empate!");
      } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
      ) {
        console.log("Você venceu! 🎉");
      } else if (opcoes.includes(jogador)) {
        console.log("Computador venceu! 💻");
      } else {
        console.log("Opção inválida! Digite pedra, papel ou tesoura.");
      }

      resolve("continuar");
    });
  });
}

(async function main() {
  let continuar;
  do {
    continuar = await jogar();
  } while (continuar !== "sair");

  console.log("Jogo encerrado. Obrigado por jogar! 👋");
  rl.close();
})();
