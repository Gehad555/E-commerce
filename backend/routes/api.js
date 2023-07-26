
const express = require('express');
const router = express.Router();
const { createUser, loginUser , editUser  , getUser} = require('./UserRouter');
const { validationlogin } = require('../middleware/validation');
const { validationsignup } = require('../middleware/validation');
const {getprducts, getprductsById,  addProductinstore } = require('./productRouter');
const {getCartProduct ,addproductInCart ,deleteProductInCart  } = require('./CartRouter');

//user routes
router.post('/signup',validationsignup, createUser);//
router.post('/login',validationlogin, loginUser);//
router.patch('/edit/:id' , editUser )
router.get('/:Email', getUser )

//product routes
router.get('/', getprducts);// not print 
router.get('/products/:id', getprductsById);//
router.post('/addproduct', addProductinstore);// only admin



module.exports = router;

