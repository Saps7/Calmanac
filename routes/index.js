const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

router.get('/', (req,res) => res.render('welcome'));

const products=['/images/c1.jpg','/images/c2.jpg','/images/c3.jpg','/images/c4.jpg','/images/c5.jpg',
'/images/c6.jpg','/images/c7.jpg','/images/c8.jpg','/images/c9.jpg','/images/c10.jpg',
'/images/c11.jpg','/images/c12.jpg','/images/c13.jpg','/images/c14.jpg','/images/c15.jpg']

const similar=['/images/c7.jpg','/images/c8.jpg','/images/c9.jpg','/images/c10.jpg']

router.get('/dashboard', ensureAuthenticated, (req,res) => 
    res.render('dashboard', {
        name: req.user.name
}));

router.get('/products', (req,res) => 
    res.render('products', {
        products: products
    })
);

router.get('/product', (req,res) => 
    res.render('product', {
        products: similar
    })
);

module.exports = router;