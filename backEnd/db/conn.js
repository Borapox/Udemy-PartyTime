// Importa o módulo 'mongoose', que é uma biblioteca de ODM (Object Data Modeling) para MongoDB e Node.js
const mongoose = require("mongoose");

// Define uma função assíncrona chamada 'main' para conectar ao banco de dados MongoDB
async function main () {

    try {
        // Define uma configuração no mongoose para 'strictQuery', que torna as queries mais estritas para evitar comportamento inesperado
        mongoose.set("strictQuery", true);

        // Usa o método 'connect' do mongoose para estabelecer uma conexão com o banco de dados MongoDB Atlas
        // A URL contém as credenciais de acesso e configurações de retry
        await mongoose.connect(
            "mongodb+srv://borapox:9r9kGlRjfsAWRXFT@cluster0.zrdmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        // Exibe uma mensagem no console quando a conexão com o banco de dados for bem-sucedida
        console.log("Conectado ao Banco!");
    } catch (error) {
        // Captura e exibe qualquer erro que possa ocorrer durante a conexão
        console.log(`Erro ${error}`);
    }
}

// Exporta a função 'main' para que possa ser utilizada em outros arquivos
module.exports = main;
