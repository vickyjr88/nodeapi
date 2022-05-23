const { Sequelize } = require('sequelize');
require('dotenv').config()

console.log(process.env.DATABASE, process.env.USER, process.env.PASSWORD)

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

module.exports = sequelize