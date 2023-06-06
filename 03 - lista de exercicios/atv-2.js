/* 2) O IMC - Indice de Massa Corporal é um criterio da Organização mundial de saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5: Abaixo do Peso;
- Entre 18.5 e 25: Peso Normal
- Entre 25 e 30: Acima do Peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave;
*/

const pessoa = 'Maria';
const pesoKg = 130;
const alturaEmM = 1.68;

const IMC = pesoKg / (alturaEmM * alturaEmM);

if (IMC < 18.5) {
    console.log(`Seu IMC deu: ` + IMC.toFixed(2) + ` | Você está ABAIXO DO PESO!`)
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log(`Seu IMC deu: ` + IMC.toFixed(2) + ` | Você está saudável!`)
} else if (IMC >= 25 && IMC <= 30) {
    console.log(`Seu IMC deu: ` + IMC.toFixed(2) + ` | Você está ACIMA DO PESO!`)
} else if (IMC >= 30 && IMC <= 40) {
    console.log(`Seu IMC deu: ` + IMC.toFixed(2) + ` | Você está OBESO!`)
} else if (IMC > 40) {
    console.log(`Seu IMC deu: ` + IMC.toFixed(2) + ` | Você está com OBESIDADE GRAVE!`)
}