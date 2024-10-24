// Importa o roteador do Express para lidar com as rotas de forma modular e organizada
const router = require("express").Router();

// Importa o controlador de serviços, que contém as funções que serão executadas quando as rotas relacionadas a 'Service' forem acessadas
const serviceController = require("../controllers/serviceController");

// Define a rota para '/services' que lida com requisições do tipo POST
// Quando uma requisição POST é recebida, o método 'create' do 'serviceController' é chamado para criar um novo serviço
router
    .route("/services")
    .post((req, res) => serviceController.create(req, res));

// Define a rota para '/services' que lida com requisições do tipo GET
// Quando uma requisição GET é recebida, o método 'getAll' do 'serviceController' é chamado para retornar todos os serviços
router
    .route("/services")
    .get((req, res) => serviceController.getAll(req, res));

// Exporta o roteador para que ele possa ser utilizado em outros arquivos, permitindo o gerenciamento de rotas de serviços
module.exports = router;
