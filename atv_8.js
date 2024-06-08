// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();

var horasAtividade = prompt('Quantas horas de atividade física você teve no mês? ');

var pontos = 0;

switch (true) {
    case horasAtividade <= 10:
        pontos = horasAtividade * 2;
        break;
    case horasAtividade <= 20:
        pontos = 10 * 2 + (horasAtividade - 10) * 5;
        break;
    default:
        pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
}

var dinheiro = pontos * 0.05;

console.log('Você fez', horasAtividade, 'horas de atividade física no mês e ganhou', pontos, 'que sao R$', dinheiro.toFixed(2));