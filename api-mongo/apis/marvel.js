const express = require('express')
const router = express.Router()

const {marvelController} = require('../controllers')
const {
    getmarvel,
    createmarvel 
} = marvelController

router.get('/', async(req,res)=>{
    const character = await getmarvel()
    res.send(character)
})

router.post('/', async(req,res)=>{
    const newCharacter = req.body
    try{
        const newmarvel = await createmarvel(newCharacter)
        res.send(newmarvel)
    } catch(err){
        console.log(err)
    }
})

module.exports = router