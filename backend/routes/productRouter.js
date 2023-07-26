const express = require('express');
const router = express.Router();
const {Product} = require('../models/productModel');

const getprducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
const getprductsById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
const addProductinstore = async (req, res) =>{
    const { name, price, countINStock , image } = req.body;
    try {
        const product = new Product({
            name,
            price,
            countINStock,
            image,
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getprducts,
    getprductsById,
    addProductinstore
}