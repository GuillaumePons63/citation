const express = require("express");
const app = express();
require('dotenv').config();
const sequelize = require('./config/sequelize.js');
const jokesRoute = require('./routes/jokes')
const notesRoute = require('./routes/notes')




sequelize.authenticate()
    .then(() => {
        const jokes = require("./models/jokes.js")
        const notes = require('./models/notes.js')
        const users = require('./models/users.js')
        try {
            jokes.sync();
            notes.sync();
            users.sync();
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



app.use('/joke', jokesRoute)

app.use('/note', notesRoute)







module.exports = app;