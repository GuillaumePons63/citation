const sequelize = require('../config/sequelize.js')
const { DataTypes } = require("sequelize");

const jokes = require('./jokes.js')

const notes = sequelize.define("notes", {
    note: {
        type: DataTypes.INTEGER(),
        allowNull: false
    }
})

jokes.hasOne(notes, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION'
});

notes.belongsTo(jokes);

module.exports = notes;