const Book = require('../models/bookModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../utils/apifeatures')

// Create Book -- Admin
exports.createBook = catchAsyncErrors(
    async (req, res, next) => {
        const book = await Book.create(req.body)

        res.status(201).json({
            success: true,
            book
        })
    }
)

// Get all books
exports.getAllBooks = catchAsyncErrors(
    async (req, res) => {
        const apiFeature = new ApiFeatures(Book.find(), req.query).search().filter()
        const books = await apiFeature.query
        res.status(200).json({
            success: true,
            books
        })
    }
)

// Get Book Details
exports.getBookDetails = catchAsyncErrors(
    async (req, res, next) => {
        const book = await Book.findById(req.params.id)

        if (!book) {
            return next(new ErrorHandler("Book not found", 404))
        }

        res.status(200).json({
            success: true,
            book
        })
    }
)
// Update Product -- Admin

exports.updateBook = catchAsyncErrors(
    async (req, res, next) => {
        let book = await Book.findById(req.params.id)

        if (!book) {
            return next(new ErrorHandler("Book not found", 404))
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
)

// Delete Product -Admin

exports.deleteBook = catchAsyncErrors(
    async (req, res, next) => {
        const book = await Book.findById(req.params.id)

        if (!book) {
            return next(new ErrorHandler("Book not found", 404))
        }
        await book.remove()

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        })
    }
)