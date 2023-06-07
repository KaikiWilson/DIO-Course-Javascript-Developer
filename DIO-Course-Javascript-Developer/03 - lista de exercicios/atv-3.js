







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

const produto = 'sabonete';
const precoProduto = 32;
const formaPagamento = 'Crédito em 3x';

const descontoDebito = (precoProduto * 10) / 100;
const descontoDinPix = (precoProduto * 15) / 100;
const cartaoComJuros = (precoProduto * 10) / 100;
const cartaoSemJuros = precoProduto;


if (formaPagamento === 'PIX' || formaPagamento === 'Dinheiro') {

    const precoProdutoComDesconto = precoProduto - descontoDinPix;

    console.log(`Opa! Você utilizou a forma de pagamento Dinheiro ou PIX e recebeu um desconto de 15%. O valor total a pagar é: R$`
                + precoProdutoComDesconto.toFixed(2));

} else if (formaPagamento === 'Debito') {

    const precoProdutoComDesconto = precoProduto - descontoDebito;

    console.log(`Opa! Você utilizou a forma de pagamento DÉBITO e recebeu um desconto de 10%. O valor total a pagar é: R$`
                + precoProdutoComDesconto.toFixed(2));

} else if (formaPagamento === 'Crédito em 2x') {

    const precoProdutoComDesconto = cartaoSemJuros;

    console.log(`Opa! Você utilizou a forma de pagamento Cartão de Crédito em até 2x sem juros. O valor total a pagar é: R$`
                + precoProdutoComDesconto.toFixed(2));

} else if (formaPagamento === 'Crédito em 3x') {

    const precoProdutoComDesconto = precoProduto + cartaoComJuros;

    console.log(`Opa! Você utilizou a forma de pagamento Cartão de Crédito em até 3x e recebeu juros de 10%. O valor total a pagar é: R$`
                + precoProdutoComDesconto.toFixed(2));
}