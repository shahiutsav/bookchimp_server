const express = require("express")
const { getAllBooks } = require("../controllers/bookController")

const router = express.Router()

router.route('/books').get(getAllBooks)

module.exports = router