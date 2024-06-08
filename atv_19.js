// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

let horario = [];
var continuar = 's';

while (continuar === 's') {
    let hora = prompt('Digite a hora: ');
    let minuto = prompt('Digite o minuto: ');
    let segundo = prompt('Digite o segundo: ');

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
        horario.push(hora + '.' + minuto + '.' + segundo);
    } else {
        console.log('Horário inválido.');
    }

    continuar = prompt('Deseja continuar? (s/n)');
}

console.log(horario);
