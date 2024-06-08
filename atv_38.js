// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync')();

var vetor = [];
var soma = 0;
var produto = 1;
var media = 0;
var ordenado = [];

console.log('operações:');
console.log('1- soma dos elementos;');
console.log('2- produto dos elementos;');
console.log('3- média dos elementos;');
console.log('4- ordene os elementos em ordem crescente;');
console.log('5- mostre o vetor.');
let op = prompt('Digite um número da operação : ');

for (let i = 0; i < 6; i++) {
    vetor[i] = Math.floor(Math.random() * 10);
    soma += vetor[i];
    produto *= vetor[i];
}

media = soma / 6;

ordenado = vetor.sort((a, b) => a - b);

switch (op) {
    case '1':
        console.log('Soma dos elementos:', soma);
        break;
    case '2':
        console.log('Produto dos elementos:', produto);
        break;
    case '3':
        console.log('Média dos elementos:', media);
        break;
    case '4':
        console.log('Vetor ordenado:', ordenado);
        break;
    case '5':
        console.log('Vetor:', vetor);
        break;
    default:
        console.log('Operação inválida');
        break;
}



