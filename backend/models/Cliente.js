const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente',{
    codCliente:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
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
    timestamps: false,
    tableName: 'clientes'
})
module.exports = Cliente



