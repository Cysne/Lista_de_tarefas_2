// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

var M = [];
var SL = [];
var SC = [];

for (var i = 0; i < 5; i++) {
    M[i] = [];
    SL[i] = 0;
    SC[i] = 0;
    for (var j = 0; j < 5; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log('matriz:', M);

console.log('vetor SL:', SL);
console.log('vetor SC:', SC);
