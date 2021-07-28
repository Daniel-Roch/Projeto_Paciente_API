const Paciente = require("../models/Paciente");

module.exports = app =>  {
    //Mostrar Todos
    app.get('/paciente',async (req,res)=>{
        try{
            const row = await Paciente.findAndCountAll()
            res.status(200).json(row)
        }catch(erro){
            res.status(500).json(erro.message)
        }
    })
    //adicionar
    app.post('/paciente',async (req,res)=>{
        try{
            await Paciente.create(req.body)
            res.status(201).json({"Create":true})
        }catch(erro){
            res.status(500).json(erro.message)
        }
    })
};