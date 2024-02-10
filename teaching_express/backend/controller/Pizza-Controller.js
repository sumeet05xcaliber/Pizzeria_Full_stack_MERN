const mongoose = require('mongoose');
const Pizza = require('../model/pizza');

exports.getPizzas = async (req, res) => {
    try {
    
        const pizzas = await Pizza.find();

        if (pizzas.length === 0) {
            return res.status(404).json({ message: "No pizzas found" });
        }

        // Send the pizzas as a JSON response
        res.status(200).json(pizzas);
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getPizzaById = async (req, res) => {
    const pizzaId = req.params.pizzaId; // Extract pizza ID from request params

    try {
        const pizza = await Pizza.findById(pizzaId);

        if (!pizza) {
            return res.status(404).json({ message: 'Pizza not found' });
        }

        res.json(pizza);
    } catch (error) {
        console.error('Error fetching pizza details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
