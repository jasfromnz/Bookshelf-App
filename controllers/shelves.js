const Shelf = require('../models/shelf');

module.exports = {
    index,
    add,
    delete: deleteBook,
    edit,
    update,
}

function index(req, res) {
    Shelf.find({}, (err, shelves) => {
        const toRead = [], read = [], reading = [];
        shelves.forEach(function(book) {
            if (book.status === "toRead") {
                book.status = "To Read";
                toRead.push(book);
            } else if (book.status === "read") {
                read.push(book);
            } else if (book.status === "reading") {
                reading.push(book);
            };
        });
        res.render('index', { toRead, read, reading });
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

function update(req, res) {
    console.log('update called!')
    Shelf.replaceOne({ _id: req.params.id }, req.body, (err, book) => {
        res.redirect('/shelves');
    });
}