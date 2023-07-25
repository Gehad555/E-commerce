
const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('./UserRouter');
const { validationuser } = require('../middleware/validation');

router.post('/signup',validationuser, createUser);
router.post('/login',validationuser, loginUser);

module.exports = router;

