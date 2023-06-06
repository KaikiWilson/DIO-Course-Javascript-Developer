function escreverMeuNome(nome) {
    console.log(`Meu nome é:  ${nome}`)
}

escreverMeuNome('Kaiki');





function verMaiorIdade(nome, idade) {
    if(idade < 18) {
        console.log(`Opa, seu nome é ${nome} e você tem apenas ${idade} anos! | DE MENOR!`)
    } else {
        console.log(`Seu nome é ${nome} e você tem ${idade} anos! | DE MAIOR!`)
    }
}

verMaiorIdade('Kaiki', 20);

// DAQUI EM DIANTE É A OUTRA ATIVIDADE!! -------------------------------









/*
    3) Elabore um algoritmo que calcula o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// IRRELEVANTE: const produto = 'sabonete';
//const descontoDebito = (precoProduto * 10) / 100;
//const descontoDinPix = (precoProduto * 15) / 100;
//const cartaoComJuros = (precoProduto * 10) / 100;
//const cartaoSemJuros = precoProduto;

const precoProduto = 32;
const formaPagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))

}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))

}


if (formaPagamento === 1) {

    //const precoProdutoComDesconto = precoProduto - descontoDinPix;

    console.log(aplicarDesconto(precoProduto, 10));

} else if (formaPagamento === 2) {

    //const precoProdutoComDesconto = precoProduto - descontoDebito;

    console.log(aplicarDesconto(precoProduto, 15));

} else if (formaPagamento === 3) {

    //const precoProdutoComDesconto = cartaoSemJuros;

    console.log(aplicarDesconto(precoProduto, 0));

} else if (formaPagamento === 4) {

    //const precoProdutoComDesconto = precoProduto + cartaoComJuros;

    console.log(aplicarJuros(precoProduto, 10));
}