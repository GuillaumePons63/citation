

const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_Password, {
    host: 'localhost',
    dialect: 'mysql'
});


