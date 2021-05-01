const Reader = require('../models/reader');

module.exports = {
    getShelf,
    add,
    delete: deleteBook,
}

function getShelf(req, res) { 
    console.log(req.user);
    const books = [];
    req.user.books.forEach(function(book){
        if(book.status === req.params.status){
            books.push(book);
        };
    });
    if (req.params.status === "toRead") {
        req.params.status = "To Read";
    };
    res.render('shelves/view', { books, status: req.params.status, user: req.user });
}

function add(req, res) {
    req.body.status = req.params.status;
    req.user.books.push(req.body);
    req.user.save(function(err) {
        res.redirect(`/shelves/${req.params.status}/view`);
    });
}

function deleteBook(req, res) {
    req.user.books.pull(req.params.id);
    req.user.save(function(err) {
        res.redirect(`/shelves/${req.params.status}/view`);
    });
}