// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

var M = [];

for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 13; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
    }
}

console.log('matriz:', M);

for (let i = 0; i < M.length; i++) {
    let maiorElemento = Math.max(...M[i].map(Math.abs));
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] /= maiorElemento;
    }
}

console.log('matriz modificada:', M);