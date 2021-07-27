const app = require('./app')

app.get('/',(req,res)=>{
    res.send('teste')
})

app.listen(process.env.PORT || 3070, ()=>{console.log('[OPEN]localhost:3070')})