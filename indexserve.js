import express  from 'express'
import morgan   from 'morgan'

const port  = 3004
const app   = express()
app.use(morgan('dev'))

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/app/login.html')
})

app.get('/cadastro',(req,res)=>{
    res.sendFile(__dirname + '/app/cadastro.html')
})

app.get('/app',(req,res)=>{
    res.sendFile(__dirname + '/app/app.html')
})

app.listen(port,()=>console.log(`online into port:${port}`))