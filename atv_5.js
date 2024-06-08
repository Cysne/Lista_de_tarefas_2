// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).


const prompt = require('prompt-sync')();

var jogador1 = prompt('Jogador 1, escolha pedra, papel ou tesoura: ');

var jogador2 = prompt('Jogador 2, escolha pedra, papel ou tesoura: ');

switch (jogador1 + jogador2) {
    case 'pedrapedra':
    case 'papelpapel':
    case 'tesouratesoura':
        console.log('Empate!');
        break;
    case 'pedratesoura':
    case 'papelpedra':
    case 'tesourapapel':
        console.log('Jogador 1 ganhou!');
        break;
    case 'pedrapapel':
    case 'papeltesoura':
    case 'tesourapedra':
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Revise sua escolha!');
}