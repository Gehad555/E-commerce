const   cartModel = require('../models/cart');

const getCart = async (req, res) => {
    try {
        const cart = await cartModel.find({userId:req.params.id}).populate('productID');
        res.status(200).send({status: 'Done', cart: cart});
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const addproductCart = async (req, res) => {
    const{productID,count} = req.body;
    try{
        const cart = await  cartModel.findoneandupdate({userId:req.params.id,productID:productID},{count:count});
        res.send('Done')
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
};

const deleteCart = async (req, res) => {
    try{
        const cart = await cartModel.findoneanddelete(req.params.id);
        res.send('Done')
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
};

module.exports = {
    getCart,
    addproductCart,
    deleteCart
}