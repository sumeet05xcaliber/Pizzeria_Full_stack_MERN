const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const pizzaRouter = require('./route/pizzaRouter');
const userRouter=require('./route/cartRouter');

const uri = 'mongodb+srv://ssumeet419:HKR0rMiKwPPix8a0@cluster0.klrsrhl.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json());
app.use(cors());

app.use('/pizza', pizzaRouter);
app.use('/cart',userRouter);

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
