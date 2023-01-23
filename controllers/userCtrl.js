const session=require('express-session')
const db=require('../models')

const User=db.user;

const {Sequelize,Op,QueryTypes}=require('sequelize')
const {sequelize,user}=require('../models')
const config=require('../config/config.json')


const getUsers=async(req,res)=>{
    try{
        const data=await User.findAll({})
        res.status(200).send({success:true,data:data})
    }catch(error){
        res.status(400).send({success:false,message:'Error'})
    }
}


const addUsers=async(req,res)=>{
    try{
        const email=req.body.email;
        const data=await User.create({
            email:email
        })
        res.status(200).send({success:true,data:data})
    }catch(error){
        res.status(400).send({success:false,message:"Error"})
        
    }
}


module.exports={
    getUsers,
    addUsers
}