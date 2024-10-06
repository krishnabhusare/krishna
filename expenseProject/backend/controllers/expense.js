const Expense = require('../models/expense');

const postExpense = async(req,res,next)=>{
    try{

        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await Expense.create({amount:amount,description:description,category:category});
        res.status(201).json({newExpense:data});

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

const getExpense = async(req,res,next)=>{
    try{
        const allExpense = await Expense.findAll();
        res.status(200).json({allExpense:allExpense});

    }catch(err){
        res.status(500).json(err);
    }

};

const deleteExpense = async(req,res,next)=>{
    try{
    const expId = req.params.id;
    await Expense.destroy({where:{id:expId}});
    res.status(200);
    }catch(err){
        res.status(500).json(err);
    }
};

module.exports = {
    postExpense,
    getExpense,
    deleteExpense
};