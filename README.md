# mqtt-sd-2020-3

## Implementação de um serviço de cadastro de carros utilizando um middleware MQTT e Node.js

**ATENÇÃO!**
Este projeto implementa o paradigma publish/subscribe com o protocolo MQTT para realizar o registro e a consulta de carros entre um "cliente" e um "servidor".

**NO ENTANTO, APESAR DE ESTAR USANDO A IDEIA DE CLIENTE E SERVIDOR, ESSE PARADIGMA NÃO É PARA SER USADO EM PRODUÇÃO DESSA FORMA, POIS TODOS OS PROCESSOS SUBSCRITOS NOS TÓPICOS RECEBERÃO E RESPONDERÃO ÀS REQUISIÇÕES!**

O paradigma publish/subscribe é diferente do paradigma cliente/servidor e, só utilizei essa aplicação para manter a consistência com os demais exemplos que apresentei ao longo da disciplina. Pensem que no publish/subscribe sempre há alguém produzindo fluxos de dados de informação e outras pessoas consumindo-os com algum propósito.