const mongoose = require('mongoose')
const ProductShcema = require('../schemas/productSchema')

const Product = mongoose.model('Product' ,ProductShcema)

module.exports ={Product}





