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


//Ajuda para Pintar a parede da sua casa
function pintura() {
    const calcular = document.getElementById('calcular')
    const altura = document.getElementById('altura')
    const largura = document.getElementById('largura')
    const resultado = document.getElementById('pintura_res')
    const resultado2 = document.getElementById('resposta2')

    calcular.addEventListener('click', () => {
        let Altura = parseFloat(altura.value)
        let Largura = parseFloat(largura.value)

        let area = Largura * Altura
        let tinta =  area /2

        resultado.innerHTML = `Sua parede tem dimensões de ${Altura}x${Largura} 
        e tem a area de ${area}`

        resultado2.innerHTML = `Para pintar essa parede 
        voce  precisará de ${tinta.toFixed(2)}l de tinta`
    })

}
pintura()