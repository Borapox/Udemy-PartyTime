// Importa o módulo 'express', um framework para criar servidores web de forma simples e eficiente
const express = require("express");

// Importa o módulo 'cors', que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const cors = require("cors");

// Cria uma instância do aplicativo Express, que será usada para configurar e rodar o servidor
const app = express();

// Aplica o middleware 'cors' a todas as rotas, permitindo que o servidor aceite requisições de origens diferentes (necessário para comunicação com front-ends em domínios distintos)
app.use(cors());

// Aplica o middleware 'express.json()', que analisa as requisições com conteúdo JSON e as transforma automaticamente em objetos JavaScript acessíveis via 'req.body'
app.use(express.json());

// Conexão ao banco de dados
// Importa a função de conexão ao banco de dados a partir do arquivo 'db/conn' e a executa para estabelecer a conexão com o MongoDB
const conn = require("./db/conn");
conn();  // Chama a função para conectar ao banco

// Importa as rotas definidas em 'routes/router' e as aplica ao caminho '/api', organizando as rotas sob esse prefixo
const routes = require("./routes/router");
app.use('/api', routes);

// Inicia o servidor para escutar na porta 3000 e executa uma função de callback quando o servidor estiver online
app.listen(3000, function() {
    console.log("Servidor Online!"); // Exibe a mensagem "Servidor Online!" no console quando o servidor estiver funcionando corretamente
});
