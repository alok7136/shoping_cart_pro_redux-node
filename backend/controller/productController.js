const res = require('express/lib/response');
const { default: Stripe } = require('stripe');
const Product = require('../models/Product');

const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'server Error'});
    }
}

const getProductById = async(req,res)=>{
    try {
        const products = await Product.find(req.param.id)
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'server Error'});
    }
}

const getPayment = async()=>{
    try{
        const {product,token}=req.body;
        const idempontencyKey = uuid()
        return Stripe.customers.create({
            email:token.email,
            source:token.id
        }).then(customer=>{
            Stripe.charges.create({
                amount:product.price*100,
                currency:'usd',
                customer:customer.id,
                receipt_email:token.email,
                description:`purchase of Product.name`,
                shipping:{
                    name:token.card.name,
                    address:{
                        country:token.card.address_country
                    }
                }
            },{idempontencyKey})
        }).then(result=>res.status(200).json(result))
    }catch(error){
console.log(error);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getPayment
}