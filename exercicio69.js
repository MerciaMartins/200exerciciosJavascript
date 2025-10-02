// Exercício 69: Escreva uma função que aceite um número e uma função de callback e execute a função de callback o número de vezes especificado.

function repetirCallback(vezes, callback) {
    for (let i = 0; i < vezes; i++) {
        callback(i);
    }
}


repetirCallback(5, function(i) {
    console.log("Execução número:", i + 1);
});
