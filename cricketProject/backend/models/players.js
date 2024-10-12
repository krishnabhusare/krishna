const Sequelize = require('sequelize');

const sequelize = require('../util/databse');

const Players = sequelize.define('player',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:Sequelize.STRING,
    country:Sequelize.STRING,
    birthDate:Sequelize.STRING,
    birthPlace:Sequelize.STRING,
    url:Sequelize.STRING,
    career:Sequelize.TEXT
});

module.exports = Players;