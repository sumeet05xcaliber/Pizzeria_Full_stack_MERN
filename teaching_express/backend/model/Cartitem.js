const Pizza=require('./pizza')
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    pizza: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
    quantity: Number
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;

