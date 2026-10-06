const { Sequelize } = require('sequelize')

const db = new Sequelize('db_cliente','root','senai',{
    //  Sequelize -> Classe da biblioteca que conecta com o Banco
    //  db_cliente -> nome do banco de dados
    // root -> usuário do banco de dados
    // senai -> senha do banco de dados
    host: 'localhost', // host = localhost -> nome do computador (endereço IP = 127.0.0.1)
    port: 3306, // porta TCP do banco de dados
    dialect: 'mysql' // linguagem do banco de dados
})

module.exports = db
