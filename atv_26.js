// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].


var A = [];
var B = [];
var P = [];

for (let i = 0; i < 3; i++) {
    A[i] = [];
    B[i] = [];
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        A[i][j] = Math.floor(Math.random() * 10);
        B[i][j] = Math.floor(Math.random() * 10);
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log('matriz A:', A);
console.log('matriz B:', B);
console.log('produto:', P);