const Shelf = require('../models/shelf');

module.exports = {
    index,
    getShelf,
}

function index(req, res) {
    Shelf.find({}, (err, shelves) => {
        res.render('index', { shelves });
    });
}

function getShelf(req, res) {
    if (req.params.status === 'toRead') {
        req.params.status = 'To Read';
    };
    Shelf.find({status: req.params.status}, (err, books) => { 
        res.render('shelves/view', {books });
    });
}