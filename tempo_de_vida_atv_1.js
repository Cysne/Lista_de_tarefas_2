// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.


//para rodar precisa ser instalado o prompt-sync
//npm install prompt-sync

const prompt = require('prompt-sync')();

var cigarros = prompt('Quantos cigarros você fuma por dia? ');

var anos = prompt('Há quantos anos você fuma? ');

var totalCigarros = cigarros * 365 * anos;

var totalDias = totalCigarros * 10 / 1440;

console.log('Você perdeu ' + totalDias + ' dias de vida!');