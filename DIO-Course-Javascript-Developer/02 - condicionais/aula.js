





const precoEtanol = 3.80;
const precoGasolina = 5.79;
const tipoCombust = 'gasolina'
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGastoGasolina = litrosConsumidos * precoGasolina;

const carroCombust = tipoCombust === 'Etanol';

if (carroCombust) {
    console.log('Tipo de Combustivel: Gasolina')
    console.log('Valor gasto na viagem: R$' + valorGastoGasolina.toFixed(2))
} else {
    const valorGastoEtanol = litrosConsumidos * precoEtanol;

    console.log('Tipo de Combustivel: Etanol')
    console.log('Valor gasto na viagem: R$' + valorGastoEtanol.toFixed(2))
};