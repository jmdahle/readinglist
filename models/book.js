const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    foreignid: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    previewLink: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;