// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

const array = ['a', 'a', 'c', 'c', 'e', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd']

function contarStrings(arr) {
    const obj = {}
    for (const str of arr) {
        obj[str] = arr.filter(s => s === str).length
    }
    return obj
}

console.log(contarStrings(array))

