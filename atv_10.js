// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let soma = 0;
let menor;
let pares = 0;

let continuar = 's';

let contador = 0;

do {

    let numero = prompt('Digite um número: ');
    
    if (!isNaN(numero) && numero !== '') {
        numero = +numero;
        soma += numero;

        if (numero % 2 === 0) {
            pares++;
        }

        if (contador === 0) {
            menor = numero;
        } else if (numero < menor) {
            menor = numero;
        }

        contador++;
    }
    continuar = prompt('Deseja continuar? (s/n) ');
} while (continuar.toLowerCase() === 's');


console.log('Soma dos números:', soma);
console.log('Menor número:', menor);
console.log('Média dos números:', soma / contador);
console.log('Quantidade de números pares:', pares);