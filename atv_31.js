// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

var A = 5;
var V = [];
var X = [];
var cont = 0;

for (let i = 0; i < 30; i++) {
    V[i] = [];
    for (let j = 0; j < 30; j++) {
        V[i][j] = Math.floor(Math.random() * 10);
        if (V[i][j] == A) {
            cont++;
        } else {
            X.push(V[i][j]);
        }
    }
}

console.log(`Matriz V (primeiros 10 elementos): ${V.slice(0, 10).map(row => row.slice(0, 10))}`);
console.log(`Quantidade de valores iguais a A: ${cont}`);
console.log(`Matriz X (primeiros 10 elementos): ${X.slice(0, 10)}`);

