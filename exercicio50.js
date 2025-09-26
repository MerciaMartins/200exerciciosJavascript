// Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida.

function inverterString(str) {
    return str.split("").reverse().join("");
}


console.log(inverterString("JavaScript")); 
