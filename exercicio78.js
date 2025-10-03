// Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).

var cachorro = {
    raca: "Labrador",
    nome: "Simba",
    idade: 2,

    idadeHumana: function() {
        return this.idade * 7;
    }
};


console.log("A idade do " + cachorro.nome + " em anos humanos é: " + cachorro.idadeHumana());
