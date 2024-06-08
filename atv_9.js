// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.


var prompt = require('prompt-sync')();

var salario = 0;
var sexo = '';
var totalSalarioHomens = 0;
var totalSalarioMulheres = 0;
var continuar = 's';

while (continuar == 's' || continuar == 'S') {
    salario = parseFloat(prompt('Digite o salário do funcionário: '));
    sexo = prompt('Digite o sexo do funcionário (M/F): ');

    if (sexo == 'M' || sexo == 'm') {
        totalSalarioHomens += salario;
    } else {
        totalSalarioMulheres += salario;
    }

    continuar = prompt('Deseja continuar? (s/n) ');
}

console.log('Total de salário pago aos homens: R$', totalSalarioHomens.toFixed(2));
console.log('Total de salário pago às mulheres: R$', totalSalarioMulheres.toFixed(2));