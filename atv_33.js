// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

var M = [];

for (let i = 0; i < 3; i++) {
    M[i] = [];
    for (let j = 0; j < 3; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
    }
}
console.log('matriz antes da multiplicação:', M);

var somaDiagonalSecundaria = 0;

for (let i = 0; i < M.length; i++) {
    somaDiagonalSecundaria += M[i][M.length - 1 - i];
}

var mediaDiagonal = somaDiagonalSecundaria / M.length;

for (let i = 0; i < M.length; i++) {
    M[i][i] *= mediaDiagonal;
}

console.log('media da diagonal:', mediaDiagonal);
console.log('matriz após a multiplicação:', M);