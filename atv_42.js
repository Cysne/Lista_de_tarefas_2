// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados = {
    jogo: 'Fifa 21',
    preco: 200,
    genero: 'Esporte',
    desenvolvedora: 'EA Sports',
    plataformas: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'PC'],
    lancamento: '2020'
}

function pegarArrays(obj) {
    const newObj = {}
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(pegarArrays(dados))