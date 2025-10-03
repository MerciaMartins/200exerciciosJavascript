// Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual.



var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    velocidadeAtual: 0,

    acelerar: function() {
        this.velocidadeAtual += 10;
        console.log("O carro acelerou. Velocidade atual: " + this.velocidadeAtual + " km/h");
    },

    frear: function() {
        if (this.velocidadeAtual > 0) {
            this.velocidadeAtual -= 10;
        }
        console.log("O carro freou. Velocidade atual: " + this.velocidadeAtual + " km/h");
    },

    obterVelocidade: function() {
        return this.velocidadeAtual;
    }
};


carro.acelerar();  
carro.acelerar();  
carro.frear();  
console.log("Velocidade atual (via método): " + carro.obterVelocidade() + " km/h");
