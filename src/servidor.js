const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./banco_de_dados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
})

app.get('/produto/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.delete('/produtos/:id', (request, response, next) => {
    const produto = response.send(bancoDeDados.delet(request.params.id))
    response.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`)
})