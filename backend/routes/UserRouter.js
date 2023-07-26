const express = require("express");
const router = express.Router();
const bycrypt = require('bcrypt')
const {User} = require('../models/UserModel');
const util = require('util')
const goi = require('goi')
const jwt = require('jsonwebtoken');
const { send } = require("process");
const Error = require('../helper/usererror')

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
const editUser = async (req, res, next) => {
   try{
    const { id } = req.params
    const {  FirstName, LastName,  UserName, Email, Password  } = req.body;
    const editUser = await User.findByIdAndUpdate(id, {
      FirstName, LastName,  UserName, Email, Password 
    })
    res.status(200).send('sucessfully')
   }catch{
    next(Error({
        stateCod: 400,
        message: "User Not Found"
      }))
   }
    
    }
 
const getUser = async (req, res) => {
    const Email = req.params
    const UserAccount = await User.findOne(Email)
    res.status(200).send(UserAccount)
}



module.exports = {createUser , loginUser , editUser , getUser};
