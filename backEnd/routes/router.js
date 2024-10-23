// Importa o roteador do Express para gerenciar as rotas da aplicação
const router = require("express").Router();

// Service Router: Importa o roteador de serviços, que contém as rotas específicas para o modelo 'Service'
const serviceRouter = require("./services");

// Aplica o 'serviceRouter' às rotas principais. Qualquer requisição à raiz ("/") será direcionada para o roteador de serviços
router.use("/", serviceRouter);

// Exporta o roteador principal para que possa ser utilizado no arquivo principal do servidor (app.js ou server.js)
module.exports = router;
