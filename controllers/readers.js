const Reader = require('../models/reader');

module.exports = {
    index,
    add,
    delete: deleteBook,
    edit,
    update,
}

function index(req, res) {
    const toRead = [], read = [], reading = [];
    req.user.books.forEach(function(book) {
        if (book.status === "toRead") {
            book.status = "To Read";
            toRead.push(book);
        } else if (book.status === "read") {
            read.push(book);
        } else if (book.status === "reading") {
            reading.push(book);
        };
    });
    res.render('shelves/index', { toRead, read, reading, user: req.user });
}

function add(req, res) {
    req.user.books.push(req.body);
    req.user.save(function(err) {
        res.redirect('/shelves');
    });
}

function deleteBook(req, res) {
    req.user.books.pull(req.params.id);
    req.user.save(function(err) {
        res.redirect('/shelves');
    });
}

function edit(req, res) {
    const book = req.user.books.id(req.params.id);
    res.render('shelves/edit', { book, user: req.user });
}

function update(req, res) {
    req.user.books.id(req.params.id).replaceOne({ _id: req.params.id }, req.body, (err, book) => {
            res.redirect('/shelves');
    });
}