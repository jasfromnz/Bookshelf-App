const Reader = require('../models/reader');

module.exports = {
    getShelf,
    add,
    delete: deleteBook,
    edit,
    update,
}

function getShelf(req, res) { 
    let books = [];
    req.user.books.forEach(function(book){
        if(book.status === req.params.status){
            books.push(book);
        };
    });
    let title = req.params.status;
    if (req.params.status === "toRead") {
        title = "To Read";
    };
    res.render('view/index', { books, title, status: req.params.status, user: req.user });
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

function edit(req, res) {
    const book = req.user.books.id(req.params.id);
    console.log('shelves.edit called');
    res.render('view/edit', { book, user: req.user, status: req.params.status });
}

function update(req, res) {
    const bookIdx = req.user.books.findIndex(book => (book.id === req.params.id));
    req.user.books.splice(bookIdx, 1, req.body);
    req.user.save(function() {
        res.redirect(`/shelves/${req.params.status}/view`);        
    })
}