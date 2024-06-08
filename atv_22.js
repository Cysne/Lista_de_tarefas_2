// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')();

let salarios = [];
let numeroDeFilhos = [];
let continuar = true;

while(continuar) {
    let salario = Number(prompt('Digite o salário: '));
    let filhos = Number(prompt('Digite o número de filhos: '));

    salarios.push(salario);
    numeroDeFilhos.push(filhos);

    let resposta = prompt('Deseja continuar? (s/n) ');
    if(resposta.toLowerCase() !== 's') {
        continuar = false;
    }
}

let maiorSalario = Math.max(...salarios);
let mediaSalario = salarios.reduce((a, b) => a + b, 0) / salarios.length;
let mediaFilhos = numeroDeFilhos.reduce((a, b) => a + b, 0) / numeroDeFilhos.length;

console.log('Maior salário: ' + maiorSalario);
console.log('Média de salário: ' + mediaSalario);
console.log('Média de número de filhos: ' + mediaFilhos);