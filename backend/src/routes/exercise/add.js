const { Router } = require('express')
let Exercise = require('../../models/exercises.models');

const route = Router()

route.post('/', (req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });
  
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = route