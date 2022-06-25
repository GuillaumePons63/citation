const express = require("express");
const app = express();
require('dotenv').config();
const sequelize = require('./config/sequelize.js');


sequelize.authenticate()
    .then(console.log('DATABase is ok'))
    .catch(error => console.log(error))

module.exports = app;