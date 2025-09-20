// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.

let nota = parseFloat(prompt("Digite a nota do aluno (0 a 100):"));
let classificacao;

if (nota >= 90) {
    classificacao = "A";
} else if (nota >= 80) {
    classificacao = "B";
} else if (nota >= 70) {
    classificacao = "C";
} else if (nota >= 60) {
    classificacao = "D";
} else {
    classificacao = "F";
}

console.log("A nota do aluno foi " + nota + " e sua classificação é: " + classificacao);