const Cliente = require('../models/Cliente') // require -> importa o módulo

const cadastrar = async (req,res)=>{  // async -> programação Assincrona por casusa do Banco de Dados que demora
    const valores = req.body
    console.log(valores)
    try{
        const dados = await Cliente.create(valores) // await -> comando para esperar a resposta do Banco de dados
        res.status(200).json(dados) // status -> resultado da mensagem ( Ex.: 404 not found = não encontrado )

    }catch(err){
        console.error('Erro ao cadastrar o cliente!',err)
        res.status(500).json({message: 'Erro ao cadastrar o cliente!'}) // status 500 -> erro geral de servidor
    }
}

module.exports = { cadastrar } // exports -> exporta o módulo para utilizar novamente