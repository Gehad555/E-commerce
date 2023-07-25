const express = require("express");
const router = express.Router();
const UserModel = require('../models/UserModel');
const bycrpt = require('bcrypt')
const util = require('util')
const jwt = require('jsonwebtoken')


router.post('/signup' ,async(req,res)=>{
    const {   FirstName  , LastName   , UserName , Email   ,Password  } = req.body 
    const newUser = await UserModel.create({
        FirstName  , LastName   , UserName , Email   ,Password
    });
 
    res.status(200).send(newUser)
});


module.exports = router