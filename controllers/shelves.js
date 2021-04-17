const Shelf = require('../models/shelf');

module.exports = {
    index,
}

function index(req, res) {
    res.render('index');
}