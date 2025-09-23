// Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let menor = 1;
let maior = 100;
let acertou = false;

alert("Pense em um número entre 1 e 100. Eu vou tentar adivinhar!");

while (!acertou && menor <= maior) {
    let meio = Math.floor((menor + maior) / 2);
    let resposta = prompt(
        "O número que você pensou é " + meio + "?\nDigite:\n'maior' se for maior\n'menor' se for menor\n'sim' se acertei"
    );

    if (resposta === "sim") {
        alert("Acertei! O número é " + meio);
        acertou = true;
    } else if (resposta === "maior") {
        menor = meio + 1;
    } else if (resposta === "menor") {
        maior = meio - 1;
    } else {
        alert("Resposta inválida! Digite apenas 'maior', 'menor' ou 'sim'.");
    }
}

if (!acertou) {
    alert("Parece que houve algum erro com as respostas.");
}
