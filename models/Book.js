const { Double } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name :{
        type: String,
        required:[true, 'Enter name of the book!']
    },
    ISBN:{
        type: Number,
        required: [true, "Enter ISBN of the book!"],
        unique: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    price:{
        type: Number,
        required: [true, "Enter price of the book!"]
    },
    author: {
        type: String,
        required:[true, 'Enter author of the book!']
    },
    published_date:{
        type: Date,
        required: [true, 'Enter published date of the book!']
    }
})

const Book = mongoose.model('book', BookSchema)
module.exports = Book;