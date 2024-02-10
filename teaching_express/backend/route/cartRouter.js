const express=require('express');
const router=express.Router();
const cartcontroller=require('../controller/cart-controller')
router.get('/showcart',cartcontroller.showCart);
router.post('/addTocart',cartcontroller.addToCart);
router.delete('/deleteFromCart/:cartItemId',cartcontroller.deleteFromCart);
router.put('/updateCartItemQuantity/:cartItemId', cartcontroller.updateCartItemQuantity);

module.exports=router