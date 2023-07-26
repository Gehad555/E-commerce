const mongoose = require('mongoose')
const UserShcema = require('../schemas/cartSchema')

const Cart = mongoose.model('Cart' ,'cartSchema')

module.exports ={Cart}