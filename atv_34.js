// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

var M = [];

for (let i = 0; i < 50; i++) {
    M[i] = [];
    for (let j = 0; j < 50; j++) {
        M[i][j] = Math.random() * 10;
    }
}

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] *= M[i][i];
    }
}

console.log('matriz:', M);
console.log('matriz apos a multiplicada:', M);