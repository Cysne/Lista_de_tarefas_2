// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

var numeroSorteado = Math.floor(Math.random() * 5) + 1;

var chute = prompt('Tente adivinhar o número sorteado (entre 1 e 5): ');

if (chute == numeroSorteado) {
    console.log('Parabéns, você acertou!');
} else {
    console.log('Que pena, o número sorteado foi ' + numeroSorteado, 'e você chutou ' + chute, ', tente novamente!');
}