const Sequelize = require('sequelize');

const sequelize = new Sequelize('krishna','root','Krish@123',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports = sequelize;