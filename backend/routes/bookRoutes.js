import express from 'express'
import { addBook, getAllBooks, getBook } from '../controllers/bookControllers.js'

const router = express.Router()

router.get('/', getAllBooks)
router.route('/:id')
  .get(getBook)
router.post('/addbook', addBook)

export default router