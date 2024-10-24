// Desestruturação para importar o modelo 'Service' de '../models/Service' e renomeá-lo como 'ServiceModel' para evitar possíveis conflitos de nomes
const { Service: ServiceModel } = require("../models/Service");

// Criação de um objeto 'serviceController' que será responsável por definir as funções (métodos) relacionadas às operações de serviços 
// (como criação, leitura, atualização e exclusão de serviços)
const serviceController = {

    // Método 'create' para criar um novo serviço no banco de dados
    create: async (req, res) => {
        try {
            // Cria um objeto 'service' com base nos dados enviados no corpo da requisição
            const service = {
                name: req.body.name,               // Nome do serviço
                description: req.body.description, // Descrição do serviço
                price: req.body.price,             // Preço do serviço
                image: req.body.image              // URL da imagem do serviço
            };

            // Utiliza o modelo 'ServiceModel' para criar um novo registro no banco de dados
            const response = await ServiceModel.create(service);

            // Responde com status 201 (criado) e uma mensagem de sucesso, além de retornar o objeto criado
            res.status(201).json({response, msg: "Serviço criado com sucesso!"});

        } catch (error) {
            // Em caso de erro, exibe o erro no console
            console.log(error);
        }
    },

    // Método 'getAll' para buscar todos os serviços no banco de dados
    getAll: async (req, res) => {
        try {
            // Busca todos os registros de serviços no banco de dados utilizando 'ServiceModel'
            const services = await ServiceModel.find();

            // Retorna a lista de serviços como resposta no formato JSON
            res.json(services);

        } catch (error) {
            // Em caso de erro, exibe o erro no console
            console.log(error);
        }
    }

};

// Exporta o 'serviceController' para que possa ser utilizado em outros arquivos, permitindo acessar as funções relacionadas aos serviços
module.exports = serviceController;
