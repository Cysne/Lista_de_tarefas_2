// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = prompt('Digite um número: ');
    numeros.push(numero);
}

let pares = numeros.filter(numero => numero % 2 === 0);
let posicoes = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        posicoes.push(i);
    }
}

console.log('os numeros pares:', pares);
console.log('as posições dos números são:', posicoes);
