const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    purpose: {
        type: String,
        required: true
    }, 
    producer: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    },
    dose: {
        type: Number,
        required: true
    },
    avalibility: {
        type: Number,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    pack: {
        type: Number,
        required: true
    },
    prepscription: {
        type: Boolean,
        required: true
    },
    itemImage:{
        type: String,
        required: true
    }

});
 
const ItemModel = mongoose.model('Item', ItemSchema)

module.exports = ItemModel