// Desestruturação para importar o modelo 'Service' de '../models/Service' e renomeá-lo como 'ServiceModel' para evitar possíveis conflitos de nomes
const { Service: ServiceModel } = require ("../models/Service");

// Criação de um objeto 'serviceController' que será responsável por definir as funções (métodos) relacionadas às operações de serviços (como criação, leitura, atualização e exclusão de serviços)
const serviceController = {
    // Métodos para controlar as operações sobre o modelo de serviços serão adicionados aqui
};

// Exporta o 'serviceController' para que possa ser utilizado em outros arquivos, permitindo acessar as funções relacionadas aos serviços
module.exports = serviceController;
