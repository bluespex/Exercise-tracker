const { Router } = require('express')

const route = Router()

route.use('/user', require('./user'))
route.use('/exercise', require('./exercise'))

module.exports = route
