const session=require('express-session')
const express=require('express')
const db=require('../models')
const upload=require('express-fileupload')
const UserFile=db.userFile;

const app=express()
app.use(upload())
const {Sequelize,Op,QueryTypes}=require('sequelize')
const {sequelize,user, userFile}=require('../models')
const config=require('../config/config.json');
const { application } = require('express');
const userfile = require('../models/userfile');


const getUserFiles=async(req,res)=>{
    try{
        const data=await UserFile.findAll({})
        res.status(200).send({success:true,data:data})
    }catch(error){
        res.status(400).send({success:false,message:'Error'})
    }
}


const addUserFiles=async(req,res)=>{
    try{
        const datas={
            data:req.file.filename
        }
        console.log(datas)
        if(datas){
            // const data=req.file.filename
            const data=await userFile.create({
                data:req.file.filename
            })
            res.status(200).send({success:true,data:data})
        }
        
    }catch(error){
        res.status(400).send({success:false,message:"Error"})
        console.log(error)
        
    }
}


module.exports={
    getUserFiles,
    addUserFiles
}