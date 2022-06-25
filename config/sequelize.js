const express = require("express");
const config = express();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_Password, {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;