// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

const inventarioLojaA = {
    Smartv: 20,
    notebook: 50,
    celular: 100,
    tablet: 30,
    xbox: 5   
}

const inventarioLojaB = {
    Smartv: 50,
    notebook: 100,
    celular: 20,
    tablet: 30,
    nintendoSwitch: 10

}

function combinarInventarios(lojaA, lojaB) {
    return Object.assign({}, lojaA, lojaB)
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB))