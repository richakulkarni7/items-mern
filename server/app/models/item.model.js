const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: String,
    quantity: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Items', ItemSchema);