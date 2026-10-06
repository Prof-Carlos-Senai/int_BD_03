const Cliente = require('./models/Cliente')
const conn = require('./db/conn')

async function SyncDataBase() { // async -> programação assíncrona com o Banco de Dados
    try{
        await conn.sync({force: true}) // await -> esprando o banco de Dados
        console.log(`Sincronizando as tabelas`)
    }catch(err){
        console.error(`Erro ao sincronizar as tabelas`,err)
    }finally{
        await conn.close() // close -> fecha a conexão com o banco de dados
        console.log('Fechando a conexão com o Banco de dados')
    }
}
SyncDataBase() // cha o programa para rodar