const { Router } = require('express')
const User = require('../../models/users.models')

const route = Router()

route.post('/', (req,res) => {
    const username = req.body.username;

    const newUser = new User({username});
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = route