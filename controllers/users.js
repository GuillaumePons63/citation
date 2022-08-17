const users = require('../models/users')
const bcrypt = require('bcrypt')

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            users.create({
                pseudo: req.body.pseudo,
                mail: req.body.mail,
                password: hash
            })
                .then(() => res.status(201).json({ message: "utilisateur créé avec succés" }))
                .catch((error) => res.status(400).json({ error }))
        })
}

exports.connectUser = (req, res, next) => {
    users.findOne({
        where: {
            pseudo: req.body.pseudo
        }
    })
        .then((user) => {
            if (user === null) {
                res.status(404).json({ message: 'l\'utilisateur n\'existe pas' })
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then((valid) => {
                        if (!valid) {
                            res.status(401).json({ message: 'Mot de pass invalide' })
                        } else {
                            res.status(200).json({
                                userId: user.id,
                                token: 'TOKEN'
                            })
                        }
                    })
            }
        })
        .catch(error => res.status(500).json({ error }))

}