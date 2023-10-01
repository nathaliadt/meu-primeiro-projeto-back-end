const express = require("express")
const router =  express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Nathalia Dias', 
        imagem: 'https://avatars.githubusercontent.com/u/104047636?v=4',
        minibio: 'aspirante a desenvolvedora/analista de dados'
    })
}

function mostraPorta() {
    console.log("Servidor ccriado e rodando na porta", porta)
}

app.use(router.get('/mulher' , mostraMulher))
app.listen(porta, mostraPorta)