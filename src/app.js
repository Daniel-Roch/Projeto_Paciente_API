//Chamando o express e colocando dentro da constante app.
const express = require('express')
const app = express()

//chamando o express.json() para ler aquivos que o req, e multi envios.
app.use(express.json())
app.use(express.urlencoded({extended: true}))

module.exports = app