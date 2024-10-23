// Importa o módulo 'mongoose', uma biblioteca de modelagem de dados para MongoDB
const mongoose = require("mongoose");

// Extrai a propriedade 'Schema' de mongoose, usada para definir a estrutura dos dados (esquema) que será armazenada no banco de dados
const { Schema } = mongoose;

// Define um esquema para o modelo 'Service', especificando os campos e suas regras de validação
const serviceSchema = new Schema({
    name: {
        type: String,            // O campo 'name' deve ser do tipo String
        required: true           // O campo 'name' é obrigatório
    },
    description: {
        type: String,            // O campo 'description' deve ser do tipo String
        required: true           // O campo 'description' é obrigatório
    },
    price: {
        type: Number,            // O campo 'price' deve ser do tipo Number
        required: true           // O campo 'price' é obrigatório
    },
    image: {
        type: String,            // O campo 'image' deve ser do tipo String (provavelmente para armazenar o URL da imagem)
        required: true           // O campo 'image' é obrigatório
    },
}, 
    {
    // Ativa a criação automática de timestamps, como 'createdAt' e 'updatedAt' para os documentos
    timestamps: true    
    });

// Cria o modelo 'Service' baseado no esquema definido, que será usado para interagir com o MongoDB
const Service = mongoose.model("Service", serviceSchema);

// Exporta o modelo 'Service' e o esquema 'serviceSchema' para que possam ser usados em outros arquivos
module.exports = {
    Service,
    serviceSchema,
};
