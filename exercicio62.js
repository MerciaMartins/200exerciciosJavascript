// Exercício 62: Escreva uma função que receba uma string e um número e retorne a string repetida aquele número de vezes.

function repetirString(str, vezes) {
    let resultado = "";
    for (let i = 0; i < vezes; i++) {
        resultado += str;
    }
    return resultado;
}


console.log(repetirString("BFD ", 5));
