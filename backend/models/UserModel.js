const mongoose = require('mongoose')
const UserShcema = require('../schemas/UserSchema')


const UserModel = mongoose.model('User' ,UserShcema)

module.exports = UserModel