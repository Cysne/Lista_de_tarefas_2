// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync')();

let matricula = [];
let nome = [];
let salarioBruto = [];
let Inss = [];
let salarioLiquido = [];
var continuar = 's';

while (continuar === 's') {
    let mat = prompt('Digite a matrícula: ');
    let nm = prompt('Digite o nome: ');
    let salBruto = prompt('Digite o salário bruto: ');

    matricula.push(mat);
    nome.push(nm);
    salarioBruto.push(salBruto);
    Inss.push(salBruto * 0.12);
    salarioLiquido.push(salBruto - Inss);

    continuar = prompt('Deseja continuar? (s/n)');
}

for (let i = 0; i < matricula.length; i++) {
    console.log('Matrícula:', matricula[i]);
    console.log('Nome:', nome[i]);
    console.log('Salário bruto:', salarioBruto[i]);
    console.log('Dedução INSS:', Inss[i]);
    console.log('Salário líquido:', salarioLiquido[i]);
}