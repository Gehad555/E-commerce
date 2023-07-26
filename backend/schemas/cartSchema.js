const { required } = require('joi');
const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    ,
    products:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    }
    ,
    quantity:{
        type:String,
        required:true
    }
    },
    {
    timestamps: true
    });
module.exports = cartSchema;