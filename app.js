const express = require("express");
const app = express();
require('dotenv').config();
const sequelize = require('./config/sequelize.js');


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

module.exports = app;