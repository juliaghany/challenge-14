// referenced Module 14 Activity 15 config -> connection.js

// set up connection to MySQL database using sequelize
// import dotenv library to load environment variables from .env file 

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;