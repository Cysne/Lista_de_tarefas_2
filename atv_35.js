// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

var par = [];
var impar = []; 
var p = 0;
var i = 0;

for (let j = 0; j < 30; j++) {
    var num = Math.floor(Math.random() * 10);
    if (num % 2 == 0) {
        if (p == 5) {
            console.log('vetor par:', par);
            par = [];
            p = 0;
        }
        par[p] = num;
        p++;
    } else {
        if (i == 5) {
            console.log('vetor impar:', impar);
            impar = [];
            i = 0;
        }
        impar[i] = num;
        i++;
    }
}

console.log('vetor par:', par);
console.log('vetor impar:', impar);
