const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shelfSchema = new Schema({
    bookName: String,
    status: { type: String, enum: ['Read', 'Reading', 'To Read'], default: 'To Read' },
    positionIdx: { type: Number, default: 0 }
}, { timestamps: true })

module.exports = mongoose.model('Shelf', shelfSchema);