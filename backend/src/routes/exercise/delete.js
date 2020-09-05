const { Router } = require('express')
const Exercise = require('../../models/exercises.models')

const route = Router()

route.delete('/:id' , (req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then( () => res.json('Exercise Deleted!'))
        .catch(err => res.status(400).json('Error:' + err))
})

module.exports = route
