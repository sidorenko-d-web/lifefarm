const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
     
    userId: {
        type: ObjectId,
        required: true
    },
    item: {
        title: String,
        cost: Number,
        itemImage: String,
    },
    itemId: {
        type: ObjectId,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }


});

const CartModel = mongoose.model('Cart', CartSchema)

module.exports = CartModel