const { Sequelize } = require("sequelize");

const jokes = require('./models/jokes.js');



exports.createJoke = (req, res, next) => {
    jokes.create({
        joke: req.body.joke,
        author: req.body.author
    })
        .then(() => res.status(201).json({ message: "joke ajouté" }))
        .catch((error) => res.status(400).json({ error }))
}


exports.getAllJoke = (req, res, next) => {
    jokes.findAll({})
        .then(joke => res.status(200).json(joke))
        .catch(error => res.status(400).json({ error }))
}



