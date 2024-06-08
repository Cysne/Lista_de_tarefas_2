// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let transacoes = [
    { id: 3, valor: 50, data: '2021-01-03', categoria: 'lazer' },
    { id: 4, valor: 150, data: '2021-01-04', categoria: 'lazer' },
    { id: 5, valor: 200, data: '2021-01-05', categoria: 'alimentacao' },
    { id: 6, valor: 100, data: '2021-01-06', categoria: 'compras' },
    { id: 7, valor: 50, data: '2021-01-07', categoria: 'compras' }
];

function agruparTransacoes(arr) {
    let obj = {};
    for (const transacao of arr) {
        if (obj[transacao.categoria]) {
            obj[transacao.categoria].push(transacao);
        } else {
            obj[transacao.categoria] = [transacao];
        }
    }
    return obj;
}

console.log(agruparTransacoes(transacoes));