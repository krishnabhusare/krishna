const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const { error } = require('console');
const { where } = require('sequelize');
const userRoutes = require('./routes/user');


const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use('/user',userRoutes);





sequelize.sync()
.then(res=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});

