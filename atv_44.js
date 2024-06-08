// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

moba = {
    nome: 'League of Legends',
    genero: 'MOBA',
    desenvolvedora: 'Riot Games',
    lancamento: '2009'
}

function contarStrings(obj) {
    let contador = 0
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            contador++
        }
    }
    return contador
}

console.log(contarStrings(moba))