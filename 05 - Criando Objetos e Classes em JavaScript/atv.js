/*
    1 - crie uma classe para representar carros
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
    Crie um método que dado a quantidade de kilômetros e o preço do combustível nos dê o valor gasto
    em reais para realizar esse percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Preta', 1/10);
palio.calcularGastoDePercurso(70,5);
console.log(palio.calcularGastoDePercurso(70,5));

//OUTRA ATIVIDADE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX