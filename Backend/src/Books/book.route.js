const express = require('express');
const router = express.Router();
const Book = require('./book.model');


const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyToken');

router.post('/create-book',verifyAdminToken, postABook)

router.get('/',getAllBooks)

// get a single book 
router.get('/:id',getSingleBook)

// update
router.put('/edit/:id',verifyAdminToken,UpdateBook)

//delete 

router.delete("/:id",verifyAdminToken, deleteABook)

module.exports = router;
