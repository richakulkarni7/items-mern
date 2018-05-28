const Item = require('../models/item.model.js');

exports.create = (req, res) => {

    // Create a Item
    const item = new Item({
        name: req.body.name, 
        desc: req.body.desc,
        price: req.body.price,
        quantity: req.body.quantity
    });

    // Save Item in the database
    item.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Item."
        });
    });
};

// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
    Item.find()
    .then(items => {
        res.send(items);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving items."
        });
    });
};