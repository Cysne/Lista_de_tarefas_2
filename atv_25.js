// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

var M = [];
var somaColunas = [];

for (let i = 0; i < 15; i++) {
    M[i] = [];
    for (let j = 0; j < 20; j++) {
        M[i][j] = Math.random() * 10;
        if (!somaColunas[j]) {
            somaColunas[j] = 0;
        }
        somaColunas[j] += M[i][j];
    }
}

console.log('soma das colunas', somaColunas);