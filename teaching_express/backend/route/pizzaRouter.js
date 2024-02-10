const express=require('express');
const router=express.Router();
const pizzacontroller=require('../controller/Pizza-Controller')
router.get('/showPizza',pizzacontroller.getPizzas);
router.get('/:pizzaId',pizzacontroller.getPizzaById);
module.exports=router