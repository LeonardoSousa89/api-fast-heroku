import cryptr   from 'cryptr'
import express  from 'express'

const dev  = process.env.NODE_ENV     || 'development'
const prod = process.env.DATABASE_URL || 'production'

const db      = require('../knexfile')[dev]
const knex    = require('knex')(db)

const secure = new cryptr('aes256')

const router = express.Router()

router.route('/').post(async(req,res,next)=>{

    /*let sigIn = {
        email:bd.email,
        pass:bd.pass
    }*/

    /** preciso pensar mais! */
    
    //next()
   
}).get(async(req,res)=>{

    //res.redirect(200,'http://localhost:3003/app')
   try{

    await knex.select('*')
              .table('usuario')
              .then(data => res.status(200).json(data))
              .catch(err => res.status(400).json(err))

   }catch(err){
        res.status(500).json(err)
   }

})

router.route('/cadastro').post(async(req,res)=>{

    
   try{

            let data = {
                email:req.body.email,
                username:req.body.username,
                nickname:req.body.nickname,
                pass:req.body.pass
            }

            let passwd      = secure.encrypt(data.pass)
            data.pass       = passwd

    
            await knex.insert(data)
                      .table('usuario')
                      .then(data => res.status(201).json(data))
                      .catch(err => res.status(400).json(err))

       

   }catch(err){
       res.status(400).json(err)
   }

})

export default router

