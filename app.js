const express = require("express");
const app = express();
require('dotenv').config();

const sequelize = require('./config/sequelize.js');
const ctrl = require('./ctrl.js');



sequelize.authenticate()
    .then(() => {
        const jokes = require("./models/jokes.js");
        try {
            jokes.sync();
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

app.get('/', (req, res) => {
    res.send('test');

})

app.post('/joke/new',

    ctrl.createJoke
)

module.exports = app;