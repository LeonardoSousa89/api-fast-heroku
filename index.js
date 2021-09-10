import express  from 'express'
import cors     from 'cors'
import morgan   from 'morgan'

import userRouter  from './routes/login'
import appRouter   from './routes/app'

const port   = 3003 
const app    = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended: true}))

app.use('/login', userRouter)
app.use('/app',   appRouter)

app.listen(port,()=>console.log(`online into port ${port}`))
