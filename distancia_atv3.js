// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

var distancia = prompt('Qual a distância que você deseja percorrer? ');

if (distancia <= 200){
    var preco = distancia * 0.50;
    console.log('O preço da passagem é R$ ' + preco);
} else {
    var preco = distancia * 0.45;
    console.log('O preço da passagem é R$ ' + preco);
}