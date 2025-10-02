// Exercício 67: Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um novo array que contém os resultados de aplicar a função de callback a cada array.

function mapearArrays(arrayDeArrays, callback) {
    let novoArray = [];
    for (let arr of arrayDeArrays) {
        novoArray.push(callback(arr));
    }
    return novoArray;
}


let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

// Callback que soma os elementos do array
let somas = mapearArrays(arrays, function(subArr) {
    let soma = 0;
    for (let num of subArr) {
        soma += num;
    }
    return soma;
});

console.log("Arrays originais:", arrays);
console.log("Somas de cada array:", somas);
