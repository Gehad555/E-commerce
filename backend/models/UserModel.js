const mongoose = require('mongoose')
const UserShcema = require('../schemas/UserSchema')


const User = mongoose.model('User' ,UserShcema)

module.exports ={User}