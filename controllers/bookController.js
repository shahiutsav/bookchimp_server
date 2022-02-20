const { json } = require('body-parser')
const { addListener } = require('process')
const Book = require('../models/bookModel')

// Create Book -- Admin
exports.createBook = async (req, res, next) => {
    const book = await Book.create(req.body)

    res.status(201).json({
        success: true,
        book
    })
}

// get all books
exports.getAllBooks = async (req, res) => {
    const books = await Book.find()
    res.status(200).json({
        success: true,
        books
    })
}

// Update Product -- Admin

exports.updateBook = async (req, res, next) => {
    let book = await Book.findById(req.params.id)

    if (!book) {
        return res.status(500).json({
            success: false,
            message: "Book not found"
        })
    }

    book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        succes: true,
        book 
    })
}


// Delete Product -Admin

exports.deleteBook = async (req, res, next) => {
    const book = await Book.findById(req.params.id)

    if(!book) {
        return res.status(500).json({
            success:false,
            message: "Book not found"
        })
    }
    await book.remove()

    res.status(200).json({
        success: true,
        message: "Book deleted successfully"
    })
}