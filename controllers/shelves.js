const Shelf = require('../models/shelf');

module.exports = {
    index,
    add,
    delete: deleteBook,
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
    console.log(req.params.id);
    Shelf.findByIdAndDelete(req.params.id, function(err) {
        if (err) { 
            console.log(err); 
        } else { 
            console.log('deleted');
        };
        res.redirect('/shelves');
    });
}
