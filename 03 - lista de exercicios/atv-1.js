







/*1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre
da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação: 
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

const aluno = 'Cleber';
const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

const classificacaoRep = media < 5;
const classificacaoRec = media >= 5 && media <= 7

if (classificacaoRep) {
    console.log(`Você tirou média: ` + media.toFixed(2) + ' | REPROVADO')
} else if (classificacaoRec){
    console.log(`Você tirou média: ` + media.toFixed(2) + ` | RECUPERAÇÃO`)
} else {
    console.log(`Você tirou média: ` + media.toFixed(2) + ` | PASSOU DE SEMESTRE`)
};