// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

var A = [];
var B = [];
var C = 0;

for (let i = 0; i < 100; i++) {
    A[i] = Math.floor(Math.random() * 10) - 5;
    if (A[i] > 0) {
        B[C] = A[i];
        C++;
    }
}

console.log('vetor A:', A);