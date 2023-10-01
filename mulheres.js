const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Nathalia Dias', 
        imagem: 'https://avatars.githubusercontent.com/u/104047636?v=4',
        minibio: 'aspirante a desenvolvedora/analista de dados',
    },
    {
        nome: 'Nicolly Matos',
        imagem: 'ausente' ,
        minibio: 'DBA',
    },
    {
        nome: 'Taysa',
        imagem: 'ausente' ,
        minibio: 'Secretaria',

    }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)