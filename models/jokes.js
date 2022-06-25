const sequelize = require('../config/sequelize.js')
const { DataTypes } = require("sequelize");

const jokes = sequelize.define("jokes", {
    jokes: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    author: {
        type: DataTypes.TEXT(),
        allowNull: false,
    }
})

console.log('test')

module.exports = jokes;