import cryptr   from 'cryptr'
import express  from 'express'

const dev  = process.env.NODE_ENV     || 'development'
const prod = process.env.DATABASE_URL ||'production'

const db      = require('../knexfile')[dev]
const knex    = require('knex')(db)

const secure = new cryptr('aes256')
const router = express.Router()

router.route('/').put(async(req,res)=>{

  try{

    let data = {
        email:req.body.email,
        username:req.body.username,
        nickname:req.body.nickname,
        pass:req.body.pass
    }

    let passwd      = secure.encrypt(data.pass)
    data.pass       = passwd
    

        await knex.where({id:req.params})
                  .insert(data)
                  .table('usuario')
                  .then(data => res.status(201).json(data))
                  .catch(err => res.status(400).json(err))

  }catch(err){
        res.status(500).json(err)
  }

}).delete(async(req,res)=>{

   try{

          await knex.where({id:req.params})
                    .delete()
                    .table('usuario')
                    .then(_ => res.status(204).json(_))
                    .catch(err => res.status(400).json(err))

   }catch(err){
        res.status(500).json(err)
   }

}).get(async(req,res)=>{

   try{

          await knex.select(['id','email','username','nickname'])
                    .table('usuario')
                    .then(usuario => res.status(200).json(usuario))
                    .catch(err => res.status(500).json(err))

   }catch(err){
        res.status(500).json(err)
   }

})

export default router