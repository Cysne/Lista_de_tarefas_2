// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

const vendas = [
    { vendedor: 'maria', valor: 100 },
    { vendedor: 'joao', valor: 200 },
    { vendedor: 'maria', valor: 50 },
    { vendedor: 'joao', valor: 150 },
    { vendedor: 'maria', valor: 200},
    { vendedor: 'joao', valor: 100},
    { vendedor: 'maria', valor: 50}

]

function totalVendasPorVendedor(arr) {
    const obj = {}
    for (const venda of arr) {
        if (obj[venda.vendedor]) {
            obj[venda.vendedor] += venda.valor
        } else {
            obj[venda.vendedor] = venda.valor
        }
    }
    return obj
}

console.log(totalVendasPorVendedor(vendas))