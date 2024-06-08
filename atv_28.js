// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;


var M = [];
var diagonalcima = 0;
var diagonalbaixo = 0;


for (let i = 0; i < 10; i++) {
    M[i] = [];
    for (let j = 0; j < 10; j++) {
        M[i][j] = Math.floor(Math.random() * 10);
    }
}

for(let i = 0; i < M.length; i++) {
    for(let j = 0; j < M[i].length; j++) {
        if(j > i) {
            diagonalcima += M[i][j];
        } else if(i > j) {
            diagonalbaixo += M[i][j];
        }
    }
}
console.log('matriz:', M);
console.log('soma dos elementos principais de cima:', diagonalcima);
console.log('soma dos elementos principais de baixo:', diagonalbaixo);

