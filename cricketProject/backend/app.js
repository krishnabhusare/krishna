const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Players = require('./models/players')
const sequelize = require('./util/databse');



const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}));

app.use('/player/add-player', async(req,res,next)=>{
    try{
        const name = req.body.name;
        const country = req.body.country;
        const birthDate = req.body.birthDate;
        const birthPlace = req.body.birthPlace;
        const url = req.body.url;
        const career = req.body.career;

        const data = await Players.create({name:name,country:country,birthDate:birthDate,birthPlace:birthPlace,url:url,career:career});

        res.status(201).json({newPlayer:data});

    }catch(err){
        res.status(500).json(err);
    }


});

app.get('/player/get-player/:name', async(req,res,next)=>{
    try{
      const searchName = req.params.name;
      console.log(searchName);
      
    const allPlayers = await Players.findAll({where:{name:searchName}});
    res.status(200).json({allPlayers:allPlayers});
      
      
    }catch(err){
        res.status(500).json(err);
    }
})

sequelize.sync()
.then(res=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})



