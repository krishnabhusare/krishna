const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    amount:Sequelize.INTEGER,
    description:Sequelize.STRING,
    category:Sequelize.STRING
});

module.exports = Expense;