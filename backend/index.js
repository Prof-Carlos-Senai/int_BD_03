const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost' //  'localhost' ou IP '127.0.0.1'
const PORT = 3000 // Porta do TCP igual 3000

const clienteController = require('./controller/cliente.controller.js')
const conn = require('./db/conn')

//  -------- middleware --------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -----------------------------


app.post('/cliente', clienteController.cadastrar)


app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação Rodando"})
})

// ---------- Sever -------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
    console.log(`Sevidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao sincronizar com o Banco de Dados!',err)
})


