const Shelf = require('../models/shelf');

module.exports = {
    index,
    getShelf,
    addBook,
}

function index(req, res) {
    Shelf.find({}, (err, shelves) => {
        res.render('index', { shelves });
    });
}

function getShelf(req, res) {
    Shelf.find({status: req.params.status}, (err, books) => { 
        res.render('shelves/view', { books, status: req.params.status });
    });
}

function addBook(req, res) {
    req.body.status = req.params.status;
    Shelf.create(req.body, (err, book) => {
        res.redirect(`/shelves/${book.status}/view`);
    });
}