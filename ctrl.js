const { Sequelize } = require("sequelize");

const jokes = require('./models/jokes.js');
const notes = require('./models/notes.js')



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

exports.deleteOneJoke = (req, res, next) => {
    jokes.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(201).json({ message: "post supprimé" }))
        .catch((error) => res.status(500).json({ error }));
}

exports.createNote = (req, res, next) => {
    notes.create({
        note: req.body.note,
        jokeId: req.params.id
    }).then(() => res.status(201).json({ message: "note ajoutée" }))
        .catch((error) => res.status(400).json({ error }));
}

exports.getNotes = (req, res, next) => {
    notes.findAll({
        where: {
            jokeId: req.params.id
        }
    }).then((note) => {
        let array = [];
        note.forEach(note => {
            array.push(note.note)
        })
        res.status(200).json(array)
    })
        .catch((error) => res.status(400).json({ error }));
}