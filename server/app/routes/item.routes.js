module.exports = (app) => {
    const items = require('../controllers/item.controller.js');

    // Create a new item
    app.post('/items', items.create);

    // Retrieve all items
    app.get('/items', items.findAll);

}