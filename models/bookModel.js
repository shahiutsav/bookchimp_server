const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name of the Book"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter a suitable description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the price for the book"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please select the book's category"]
    },
    Stock: {
        type: Number,
        required: [true, 'Please enter the amount of stock'],
        default: 1
    },
    numOfReviews: {
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Book', bookSchema)