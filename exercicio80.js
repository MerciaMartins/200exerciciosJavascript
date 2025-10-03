// Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas.


var estudante = {
    nome: "Ayla",
    notas: [8, 7, 9, 6, 10],

    calcularMedia: function() {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};


console.log("A média de " + estudante.nome + " é: " + estudante.calcularMedia());
