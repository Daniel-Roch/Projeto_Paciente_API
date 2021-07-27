//para recarregar a dotenv e ler arquivos .env
require('dotenv').config()

//Chamando o express e colocando dentro da constante app.
const express = require('express')
const app = express()

//chamando o express.json() para ler aquivos que o req, e multi envios.
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require('cors')
//cors -> ativar para todos
app.use(cors())


module.exports = app