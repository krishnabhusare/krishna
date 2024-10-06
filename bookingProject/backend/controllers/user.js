const User = require('../models/user');


const addUser = async(req,res,next)=>{
    try{
      if(!req.body.name){
       
         return res.status(400).json('name is missing');
      }
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;


        const data = await User.create({name:name,email:email,phone:phone});
        res.status(201).json({newUserDetails:data});

    }catch(err){
        console.log('error in creating new user');
         res.status(500).json({error:err});
    }

};

const getUser = async(req,res,next)=>{
    try{
       const allUsers = await User.findAll();
       res.status(200).json({allUsers:allUsers});
    }catch(err){
        console.log('error in getting all users');
        res.status(500).json(err);
    }
  
  
  };

  const deleteUser = async(req,res,next)=>{
    try{
      const uId = req.params.id;
      await User.destroy({where:{id:uId}});
      res.status(200).json('deleted');
      
  
    }catch(err){
      console.log('error in deleting user');
      res.status(500).json(err);
    }
  };

  module.exports={
    addUser,
    getUser,
    deleteUser
  };