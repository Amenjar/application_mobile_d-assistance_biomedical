const fichecontroleur=require('../controlleurs/fichecontrolor')
const express =require ('express')
const route=express.Router()
route.post('/create',fichecontroleur.create)
route.get('/getall',fichecontroleur.getall)
route.get('/getbyid/:id',fichecontroleur.getbyid)
route.put('/update/:id',fichecontroleur.update)
route.delete('/delete/:id',fichecontroleur.delete)
module.exports=route
