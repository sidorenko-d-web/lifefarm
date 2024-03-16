const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const subSchemaItem = new mongoose.Schema({
    title: String,
    itemId: ObjectId,
    cost: Number,
    count: Number
})

const OrderSchema = new mongoose.Schema({
     
    userId: {
        type: ObjectId,
        required: true
    },
    orderItems:{
        type: [subSchemaItem],
        required: true
    },
    pickUpPoint: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }


});

const OrderModel = mongoose.model('Order', OrderSchema)

module.exports = OrderModel