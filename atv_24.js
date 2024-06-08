// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

var M = [];
var C = [];

for (let i = 0; i < 6; i++) {
    M[i] = [];
    C[i] = 0;
    for (let j = 0; j < 8; j++) {
        M[i][j] = Math.floor(Math.random() * 20) - 10;
        if(M[i][j] < 0) {
            C[i]++;
        }
    }
}

console.log('matriz M:', M);
console.log('quantidade de numeros negativos:', C);