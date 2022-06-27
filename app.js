const express = require("express");
const app = express();
require('dotenv').config();

const sequelize = require('./config/sequelize.js');
const ctrl = require('./ctrl.js');


sequelize.authenticate()
    .then(() => {
        const jokes = require("./models/jokes.js");
        const notes = require('./models/notes.js');
        try {
            jokes.sync();
            notes.sync();
        } catch {
            throw error;
        }
    })
    .catch(error => console.log(error))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization,*"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(
    express.json()
)

app.get('/joke/all',
    ctrl.getAllJoke
)

app.get('/joke/:id',
    ctrl.getOneJoke
)

app.get('/joke/:id/notes',
    ctrl.getNotes
)

app.post('/joke/new',
    ctrl.createJoke
)

app.post('/joke/:id/newnote',
    ctrl.createNote
)

app.delete('/joke/delete/:id',
    ctrl.deleteOneJoke
)

module.exports = app;