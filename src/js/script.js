//converter moeda para dolar
function conversor_money() {
    const moeda = document.getElementById('moeda');
    const converter = document.getElementById('converter');
    const res_conversao = document.getElementById('resultado_conversao');

    converter.addEventListener('click', () => {
        let real = parseFloat(moeda.value);
        let valor_dolar = real / 6.08

        res_conversao.innerHTML = `Seu saldo em reais é R$${real} 
        em dolar vai ser cerca de US$${valor_dolar.toFixed(2)}`
    });
}
conversor_money()