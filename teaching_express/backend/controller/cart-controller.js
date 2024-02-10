const CartItem = require('../model/Cartitem');

exports.showCart = async (req, res) => {
    try {
        const cartItems = await CartItem.find();

        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.addToCart = async (req, res) => {
    const { pizzaId, quantity } = req.body;

    try {
        const cartItem = new CartItem({
            pizza: pizzaId,
            quantity: quantity
        });

        await cartItem.save();

        res.status(201).json({ message: 'Item added to cart successfully', cartItem });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.deleteFromCart = async (req, res) => {
    const cartItemId = req.params.cartItemId;

    try {
        const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);

        if (!deletedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateCartItemQuantity = async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    try {
        const updatedCartItem = await CartItem.findByIdAndUpdate(cartItemId, { quantity }, { new: true });

        if (!updatedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json({ message: 'Cart item quantity updated successfully', updatedCartItem });
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



