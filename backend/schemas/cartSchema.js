const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    productID: { type: String, required: true },
    count: { type: Number, required: true },

});
const cartModel = mongoose.model('Cart', cartSchema);
module.exports = cartModel;