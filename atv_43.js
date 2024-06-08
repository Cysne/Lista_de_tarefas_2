// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

obj1 =
{
    jogo: "Starfield",
    data: "2022",
    plataforma: "Xbox",
    desenvolvedora: "Bethesda",
    genero: "RPG",
    preco: "R$ 350,00"

}

obj2 = {
    jogo: "Homem-Aranha: Miles Morales",
    data: "2020",
    plataforma: "PS5",
    desenvolvedora: "Insomniac Games",
    genero: "Ação",
    preco: "R$ 250,00"
}

function combinaObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

console.log(combinaObjetos(obj1, obj2))
