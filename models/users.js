const sequelize = require('../config/sequelize.js')
const { DataTypes } = require("sequelize");

const users = sequelize.define("users", {
    pseudo: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    mail: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT(),
        allowNull: false,
    }
})



module.exports = users;