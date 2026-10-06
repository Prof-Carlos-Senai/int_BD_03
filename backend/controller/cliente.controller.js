const Cliente = require('../models/Cliente')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try{
        const dados = await Cliente.create(valores)
        res.status(200).json(dados)

    }catch(err){
        console.error('Erro ao cadastrar o cliente!',err)
        res.status(500).json({message: 'Erro ao cadastrar o cliente!'})
    }
}

module.exports = { cadastrar }