const { Router } = require('express')
const User = require('../../models/users.models')

const route = Router()

route.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

route.use('/add', require('./add'))

module.exports = route