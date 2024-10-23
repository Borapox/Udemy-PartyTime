// Importa o roteador do Express para lidar com as rotas de forma modular e organizada
const router = require("express").Router();

// Importa o controlador de serviços, que contém as funções que serão executadas quando as rotas relacionadas a 'Service' forem acessadas
const serviceController = require("../controllers/serviceController");

// As rotas relacionadas aos serviços serão definidas aqui, utilizando o roteador do Express

// Exporta o roteador para que ele possa ser utilizado em outros arquivos, permitindo o gerenciamento de rotas de serviços
module.exports = router;
