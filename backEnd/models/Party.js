// Importa o módulo 'mongoose', que é uma biblioteca de modelagem de dados para MongoDB
const mongoose = require("mongoose");

// Desestrutura a propriedade 'Schema' de 'mongoose', usada para definir a estrutura dos dados no banco de dados
const { Schema } = mongoose;

// Importa o esquema 'serviceSchema' do arquivo 'Service', que será utilizado para representar serviços associados à festa
const { serviceSchema } = require('./Service');

// Define o esquema 'partySchema' para o modelo 'Party', especificando os campos e suas respectivas validações
const partySchema = new Schema({
    title: {
        type: String,        // O campo 'title' deve ser do tipo String
        required: true       // O campo 'title' é obrigatório
    },
    author: {
        type: String,        // O campo 'author' deve ser do tipo String (provavelmente o organizador da festa)
        required: true       // O campo 'author' é obrigatório
    },
    description: {
        type: String,        // O campo 'description' deve ser do tipo String
        required: true       // O campo 'description' é obrigatório
    },
    budget: {
        type: Number,        // O campo 'budget' deve ser do tipo Number (valor do orçamento da festa)
        required: true       // O campo 'budget' é obrigatório
    },
    image: {
        type: String,        // O campo 'image' deve ser do tipo String (geralmente uma URL da imagem relacionada à festa)
        required: true       // O campo 'image' é obrigatório
    },
    services: {
        type: [serviceSchema], // O campo 'services' é uma lista de objetos do tipo 'serviceSchema', permitindo associar vários serviços à festa
        required: true         // O campo 'services' é obrigatório
    },
}, {
    // Ativa a criação automática de timestamps, como 'createdAt' e 'updatedAt' para os documentos de festas
    timestamps: true
});

// Cria um modelo chamado 'Party' baseado no esquema 'partySchema', que será utilizado para interagir com o MongoDB
const Party = mongoose.model("Party", partySchema);

// Exporta o modelo 'Party' para que possa ser utilizado em outros arquivos
module.exports = Party;
