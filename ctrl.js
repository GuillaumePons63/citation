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


exports.getOneJoke = (req, res, next) => {
    console.log('test');
    jokes.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((joke) => {
            if (joke === null) {
                res.status(404).json('ressource introuvable')
            } else {
                res.status(200).json(joke)
            }
        })
        .catch((error) => res.status(400).json(error))

}