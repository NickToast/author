const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter author's name"],
        minlength: [3, "Name must be at least 3 characters long"]
    }
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author