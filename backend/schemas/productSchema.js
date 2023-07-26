
const mongoose = require('mongoose')

const ProductShcema = mongoose.Schema({
        name: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        countINStock: { type: Number, required: true },
        image: { type: String, required: true },
   
})
module.exports = ProductShcema