const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: String,
    status: { type: String, enum: ['read', 'reading', 'toRead'], default: 'toRead' },
    positionIdx: { type: Number, default: 0 }
}, { timestamps: true })

const readerSchema = new Schema({
    name: String,
    googleID: String,
    books: [bookSchema],
})

module.exports = mongoose.model('Reader', readerSchema);