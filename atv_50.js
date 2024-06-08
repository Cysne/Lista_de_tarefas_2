// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync')();

let hoteis = [
    { id: '1', nome: 'Hotel 1', cidade: 'Fortaleza', quartosTotais: 5, quartosDisponiveis: 3 },
    { id: '2', nome: 'Hotel 2', cidade: 'São Paulo', quartosTotais: 10, quartosDisponiveis: 7 },
    { id: '3', nome: 'Hotel 3', cidade: 'Rio de Janeiro', quartosTotais: 8, quartosDisponiveis: 4 },
];

let reservas = [
    { idReserva: '1', idHotel: '1', nomeCliente: 'Cliente 1' },
    { idReserva: '2', idHotel: '2', nomeCliente: 'Cliente 2' },
];

function adicionarHotel(hoteis, id, nome, cidade, quartosTotais, quartosDisponiveis) {
    hoteis.push({ id, nome, cidade, quartosTotais, quartosDisponiveis });
}

function buscarHoteisPorCidade(hoteis, cidade) {
    return hoteis.filter(hotel => hotel.cidade === cidade);
}

function fazerReserva(hoteis, reservas, idReserva, idHotel, nomeCliente) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel && hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--;
        reservas.push({ idReserva, idHotel, nomeCliente });
    } else {
        console.log('Não há quartos disponíveis');
    }
}

function cancelarReserva(hoteis, reservas, idReserva) {
    const index = reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (index !== -1) {
        const hotel = hoteis.find(hotel => hotel.id === reservas[index].idHotel);
        hotel.quartosDisponiveis++;
        reservas.splice(index, 1);
    }
}

function listarReservas(hoteis, reservas) {
    for (const reserva of reservas) {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
    }
}

function checkIn(idReserva) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);

    if (!reserva) {
        console.log('Reserva não encontrada');
        return;
    }

    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

    if (!hotel) {
        console.log('Hotel não encontrado');
        return;
    }

    if (hotel.quartosDisponiveis <= 0) {
        console.log('Não há quartos disponíveis neste hotel');
        return;
    }

    hotel.quartosDisponiveis -= 1;
    console.log('Check-in realizado com sucesso');
}

function checkOut(hoteis, idReserva) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (reserva) {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        hotel.quartosDisponiveis++;
    }
}

function relatorioOcupacao(hoteis, idHotel) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (!hotel) {
        console.log('Hotel não encontrado');
        return;
    }

    const ocupacao = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
    const avaliacao = hotel.avaliacao || 'Sem avaliação';

    console.log(`Ocupação: ${ocupacao}%, Quartos disponíveis: ${hotel.quartosDisponiveis}, Avaliação: ${avaliacao}`);
}

function avaliarHotel(hoteis, idHotel, avaliacao) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel) {
        hotel.avaliacao = avaliacao;
    }
}

while (true) {
    console.log('1. Adicionar hotel');
    console.log('2. Buscar hotéis por cidade');
    console.log('3. Fazer reserva');
    console.log('4. Cancelar reserva');
    console.log('5. Listar reservas');
    console.log('6. Check-in');
    console.log('7. Check-out');
    console.log('8. Relatório de ocupação');
    console.log('9. Avaliar hotel');
    console.log('10. Sair');

    let opcao = prompt('Digite a opção desejada: ');

    if (opcao === '10') {
        break;
    }

    switch (opcao) {
        case '1':
            adicionarHotel(hoteis, prompt('ID: '), prompt('Nome: '), prompt('Cidade: '), parseInt(prompt('Quartos totais: ')), parseInt(prompt('Quartos disponíveis: ')));
            break;
        case '2':
            console.log(buscarHoteisPorCidade(hoteis, prompt('Cidade: ')));
            break;
        case '3':
            fazerReserva(hoteis, reservas, prompt('ID da reserva: '), prompt('ID do hotel: '), prompt('Nome do cliente: '));
            break;
        case '4':
            cancelarReserva(hoteis, reservas, prompt('ID da reserva: '));
            break;
        case '5':
            listarReservas(hoteis, reservas);
            break;  
        case '6':
            checkIn(prompt('ID da reserva: '));
            break;  
        case '7':
            checkOut(hoteis, prompt('ID da reserva: '));
            break;  
        case '8':
            relatorioOcupacao(hoteis, prompt('ID do hotel: '));
            break;
        case '9':
            avaliarHotel(hoteis, prompt('ID do hotel: '), prompt('Avaliação: '));
            break;
        default:
            console.log('Opção inválida');
    }
}