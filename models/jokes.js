const sequelize = require('../config/sequelize.js')
const { DataTypes } = require("sequelize");

const jokes = sequelize.define("jokes", {
    joke: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    author: {
        type: DataTypes.TEXT(),
        allowNull: false,
    }
})



module.exports = jokes;