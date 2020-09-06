const { Router } = require('express')
const Exercise = require('../../models/exercises.models')

const route = Router()

route.post('/' , (req,res)=>{
    Exercise.find({username: req.body.username})
        .then( exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error:' + err))
})

module.exports = route
