// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

var resultado = [];
var apostas = [];
var ganhadores = [];

for (var i = 0; i < 5; i++) {
    resultado[i] = Math.floor(Math.random() * 10);
}

console.log('resultado oficial:', resultado);

for (var i = 0; i < 50; i++) {
    apostas[i] = [];
    for (var j = 0; j < 5; j++) {
        apostas[i][j] = Math.floor(Math.random() * 10);
    }
}

console.log('apostas:', apostas);

for (var i = 0; i < apostas.length; i++) {
    var acertos = 0;
    for (var j = 0; j < apostas[i].length; j++) {
        if (apostas[i][j] == resultado[j]) {
            acertos++;
        }
    }
    if (acertos == 5) {
        ganhadores.push(i);
    }
}

if (ganhadores.length > 0) {
    console.log('ganhadores:', ganhadores);
} else {
    console.log('não houve ganhadores');
}


