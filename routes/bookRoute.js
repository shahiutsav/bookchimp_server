const express = require("express")
const { getAllBooks, createBook, updateBook } = require("../controllers/bookController")

const router = express.Router()

router.route('/books').get(getAllBooks)

router.route('/books/new').post(createBook)

router.route('/books/:id').put(updateBook)

module.exports = router