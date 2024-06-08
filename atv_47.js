// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log('antes da transformação:', obj)

function transformaObjeto(obj, fn) {
    const newObj = {}
    for (const key in obj) {
        newObj[key] = fn(obj[key])
    }
    return newObj
}

const dobro = n => n * 2

console.log('depois da transformação:', transformaObjeto(obj, dobro))