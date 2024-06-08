// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt = require('prompt-sync')();

let primeiro = 1;

let segundo = 1;

let proximo = 0;

console.log(primeiro);

console.log(segundo);

for (let i = 0; i < 8; i++) {
    
        proximo = primeiro + segundo;
    
        console.log(proximo);
    
        primeiro = segundo;
    
        segundo = proximo;
    
    }

