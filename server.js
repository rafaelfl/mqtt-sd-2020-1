// importação do pacote mqtt
var mqtt = require('mqtt');

// conexão estabelecida com o broker mqtt do servidor de teste do mosquitto
var server  = mqtt.connect('mqtt://test.mosquitto.org');

// constantes definidas com os nomes dos tópicos utilizados pelo processo
const REGISTRA_CARRO = 'registra-carro';
const CONSULTA_CARRO = 'consulta-carro';
const LISTA_CARROS = 'lista-carros';

// vetor que representa o "banco de dados" de carros
const listaDeCarros = [];

// adicionado o listener para o evento 'connect' (que executa quando a conexão é estabelecida)
server.on('connect', function() {
    // o processo subscreve em um tópico e, caso não ocorram erros, imprime uma mensagem na tela
    server.subscribe(REGISTRA_CARRO, function (err) {
        if (!err) {
            console.log("Subscrito no tópico '" + REGISTRA_CARRO + "' com sucesso!");
        }
    });

    // o processo subscreve em um tópico e, caso não ocorram erros, imprime uma mensagem na tela
    server.subscribe(CONSULTA_CARRO, function (err) {
        if (!err) {
            console.log("Subscrito no tópico '" + CONSULTA_CARRO + "' com sucesso!");
        }
    });

    // o processo subscreve em um tópico e, caso não ocorram erros, imprime uma mensagem na tela
    server.subscribe(LISTA_CARROS, function (err) {
        if (!err) {
            console.log("Subscrito no tópico '" + LISTA_CARROS + "' com sucesso!");
        }
    });
});

// adicionado o listener para o evento 'message' (que executa quando uma mensagem é recebida)
server.on('message', function(topic, message) {

    // o cliente testa em qual tópico a mensagem foi recebida
    switch(topic) {
        case REGISTRA_CARRO:
            // caso seja uma mensagem de registro, adiciona no "banco de dados"
            const carro = JSON.parse(message);

            listaDeCarros.push(carro);
            break;

        case CONSULTA_CARRO:
            // caso seja uma mensagem de consulta de um carro, retorna-o no tópico "resultado-consulta-carro"
            const nrCarro = parseInt(message);
            server.publish('resultado-consulta-carro', JSON.stringify(listaDeCarros[nrCarro]));
            break;
            
        case LISTA_CARROS:
            // caso seja uma mensagem de listagem de carros, retorna a lista completa no tópico "resultado-lista-carros"
            console.log("LISTA DE CARROS");

            server.publish('resultado-lista-carros', JSON.stringify(listaDeCarros));
            break;        
    }

    // sempre imprime a mensagem recebida
    console.log(message.toString());
});

