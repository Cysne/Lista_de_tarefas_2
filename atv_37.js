// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

var G = [];

for (let i = 0; i < 20; i++) {
    G[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log('gabarito:', G);

for (let i = 0; i < 50; i++) {
    var R = [];
    var acertos = 0;
    for (let j = 0; j < 20; j++) {
        R[j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        if (R[j] == G[j]) {
            acertos++;
        }
    }
    console.log('respostas do aluno', i + 1, ':', R);
    console.log('acertos:', acertos);
    if (acertos >= 12) {
        console.log('APROVADO');
    } else {
        console.log('REPROVADO');
    }
}


