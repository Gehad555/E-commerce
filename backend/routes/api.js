
const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('./UserRouter');
const { validationlogin } = require('../middleware/validation');
const { validationsignup } = require('../middleware/validation');
const { getprducts, getprductsById,  addProductinstore } = require('./productRouter');
const { getCart, addproductCart, deleteCart } = require('./CartRouter');

router.post('/signup',validationsignup, createUser);//
router.post('/login',validationlogin, loginUser);//
router.get('/products', getprducts); //
router.get('/products/:id', getprductsById);//
router.post('/addproduct', addProductinstore);// only admin
router.get([], getCart);//
router.post([], addproductCart);//
router.delete([], deleteCart);//

module.exports = router;

