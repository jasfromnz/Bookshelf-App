const Shelf = require('../models/shelf');

module.exports = {
    index,
    add,
    delete: deleteBook,
    edit,
}

function index(req, res) {
    Shelf.find({}, (err, shelves) => {
        res.render('index', { shelves });
    });
}

function add(req, res) {
    Shelf.create(req.body, (err, book) => {
        res.redirect('/shelves');
    });
}

function deleteBook(req, res) {
    Shelf.findByIdAndDelete(req.params.id, function(err) {
        if (err) { 
            console.log(err); 
        };
        res.redirect('/shelves');
    });
}

function edit(req, res) {
    Shelf.findById(req.params.id, (err, book) => {
        res.render('shelves/edit', { book });
    });
}