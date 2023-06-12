/*
1) Faça um programa que calcule e imrpima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios.
O salário a ser transferido é calculado da seguinte maneira:

valor bruto do salario - percentual de imposto mediante a faixa salarial + adicional dos beneficios.

Para calcular o percentual de imposto segue:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
 Maior que R$ 2500.00 = 15.00%

 Exemplo:
    Entrada:
        2000
        250

    Saída:
        2050.00
*/

const entradas = [5500, 250];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {

    //De R$ 0.00 a R$ 1100.00 = 5.00%
    //De R$ 1100.01 a R$ 2500.00 = 10.00%
    //Maior que R$ 2500.00 = 15.00%

    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}
const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = (calcularPorcentagem(valorSalario, aliquotaImposto));
const valorATrasferir = valorSalario - valorImposto + valorBeneficios;

print(valorATrasferir);