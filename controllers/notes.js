const notes = require('../models/notes.js')




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