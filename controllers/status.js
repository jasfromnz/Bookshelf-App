const Shelf = require('../models/shelf');

module.exports = {
    getShelf,
    add,
}

function getShelf(req, res) {
    Shelf.find({status: req.params.status}, (err, books) => { 
        res.render('shelves/view', { books, status: req.params.status });
    });
}

function add(req, res) {
    req.body.status = req.params.status;
    Shelf.create(req.body, (err, book) => {
        res.redirect(`/shelves/${book.status}/view`);
    });
}
