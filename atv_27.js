// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require('prompt-sync')();

let matriz = [];

for (let i = 0; i < 6; i++) {
    matriz[i] = [];
    for (let j = 0; j < 6; j++) {
        matriz[i][j] = parseInt(prompt(`Digite o valor da posição [${i}][${j}]: `));
    }
}

let a = parseInt(prompt('Digite o valor de A: '));

let vetor = [];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        vetor.push(matriz[i][j] * a);
    }
}

console.log('vetor:', vetor);