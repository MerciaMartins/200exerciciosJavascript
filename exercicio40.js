// Exercício 40: Usando um laço while, crie um programa que inverta uma string.


let texto = "Desenvolvedor de Sistemas"; // você pode alterar o nome para testar
let invertida = "";

let i = texto.length - 1; // começa do último caractere
while (i >= 0) {
    invertida += texto[i];
    i--;
}

console.log("String original:", texto);
console.log("String invertida:", invertida);
