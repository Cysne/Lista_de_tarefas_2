// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

var M = [];
var somaLinha4 = 0;
var somaColuna2 = 0;
var somaDiagonalPrincipal = 0;
var somaTodosElementos = 0;

for (var i = 0; i < 5; i++) {
    M[i] = [];
    for (var j = 0; j < 5; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
    }
}

for (var i = 0; i < M.length; i++) {
    for (var j = 0; j < M[i].length; j++) {
        if (i == 4) {
            somaLinha4 += M[i][j];
        }
        if (j == 2) {
            somaColuna2 += M[i][j];
        }
        if (i == j) {
            somaDiagonalPrincipal += M[i][j];
        }
        somaTodosElementos += M[i][j];
    }
}

console.log('matriz:', M);
console.log('soma da linha 4:', somaLinha4);
console.log('soma da coluna 2:', somaColuna2);
console.log('soma da diagonal principal:', somaDiagonalPrincipal);
console.log('soma de todos os elementos:', somaTodosElementos);
