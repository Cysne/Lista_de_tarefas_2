// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

var pessoa = {
    nome: 'teste',
    idade: 20
};

console.log('imprime pessoa sem email:', pessoa);

pessoa.email = 'teste@teste.com.br';

console.log('imprime pessoa com email:', pessoa);