const express = require('express');
const{getAllProducts,getProductById, getPayment}= require('../controller/productController');
const router = express.Router();

router.get('/',getAllProducts);

router.get('/:id',getProductById);

router.get('/payment',getPayment);

module.exports = router;