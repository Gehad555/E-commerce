const express = require("express");
const router = express.Router();
const bycrypt = require('bcrypt')
const {User} = require('../models/UserModel');
const util = require('util')
const goi = require('goi')
const jwt = require('jsonwebtoken');
const { send } = require("process");

const createUser = async(req, res)=>{
    const { FirstName, LastName,  UserName, Email, Password } = req.body;
    try{
       let user = await User.findOne({Email})
        if(user){
            return res.status(400).json({msg:'User already exists'})
        }
       user = new User({
            FirstName,
            LastName,
            UserName ,
            Email,
            Password,
        });
        await user.save();
        res.status(200).json({msg:'User created successfully'})
    }catch(err){
        console.log(err)
    }
}  
const loginUser = async(req, res , next )=>{
   const {Email,Password} = req.body;
    try{
       const finduser = await User.findOne({Email})
        if(!finduser){
            return res.status(400).json({msg:'User does not exists'})
        }
        else{
        if(finduser.Password!==Password){
          return res.status(400).json({msg:'password is not correct'})
        }
     else res.status(200).json({msg:'User login successfully'})
    }
    }catch(err){
        console.log(err)
    }
}



module.exports = {createUser , loginUser};
