//para recarregar a dotenv e ler arquivos .env
require('dotenv').config()

//sequelize
const conect = require('./database/sequelize')

//Chamando o express e colocando dentro da constante app.
const express = require('express')
const app = express()

//chamando o express.json() para ler aquivos que o req, e multi envios.
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require('cors')
//cors -> ativar para todos
app.use(cors())

const paciente = require('./controller/paciente-controller')
paciente(app,conect)


module.exports = app