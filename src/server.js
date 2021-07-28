const app = require('./app')

//https://projeto-api-paciente.herokuapp.com/

app.listen(process.env.PORT || 5432, ()=>{console.log('[OPEN]localhost:5432')})