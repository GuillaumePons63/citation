const { Sequelize } = require("sequelize");

const jokes = require('./models/jokes.js');



exports.createJoke = (req, res, next) => {
    console.log(req.body)
    const joke = req.body;
    console.log(joke.joke)


    jokes.create({
        joke: joke.joke,
        author: joke.author
    }).then(() => res.status(201).json({ message: "joke ajouté" })).catch((error) => res.status(400).json({ error }))
}




