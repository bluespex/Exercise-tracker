const { Router } = require('express')
let Exercise = require('../../models/exercises.models');

const route = Router()

route.get('/', (req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
})

route.use('/add', require('./add'))
route.use('/delete', require('./delete'))
route.use('/update', require('./update'))

module.exports = route