const app = require('./app')

//https://projeto-api-paciente.herokuapp.com/

app.get('/',(req,res)=>{
    res.send('teste')
})

app.listen(process.env.PORT || 5432, ()=>{console.log('[OPEN]localhost:3070')})