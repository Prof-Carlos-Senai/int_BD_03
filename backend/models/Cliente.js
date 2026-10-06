const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente',{  // .define -> modelar a tabela como classe
    codCliente:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false // allowNull -> não deixa o o campo como nulo = Not NULL no banco de dados
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false, // timestamps: false -> obrigatório para não criar os campos createdAt e updatedAt do Sequelize
    tableName: 'clientes'
})
module.exports = Cliente



