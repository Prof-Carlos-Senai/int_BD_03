let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    const nome = document.getElementById('nome').value

    let valores = {  // empacontando os dados no formato JSON (Atributo: valor)
        nome: nome,
        altura: altura,
        peso: peso
    }

    fetch(`http://localhost:3000/cliente`,{  // endereço do servidor
        method: 'POST', // POST siginifica que vamos gravar os dados no backend
        headers: { 'Content-Type':'application/json'}, // formato dos dados em JavaScript Object Notation - JSON
        body: JSON.stringify(valores) // convertendo os dados javascript para string (letras)
    })
    .then(res => res.json()) // traduzindo o javascript da resposta do backend para string (letras)
    .then(dados =>{
        resposta.innerHTML = '' // apagando a tela
        resposta.innerHTML += `<p>Nome: ${dados.nome}</p>`
        resposta.innerHTML += `<p>Altura: ${dados.altura}</p>`
        resposta.innerHTML += `<p>Peso: ${dados.peso}</p>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados do usuário', err)
        resposta.innerHTML = 'Erro ao cadastrar os dados do usuário'
    })
})