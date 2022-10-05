import express from 'express'
import { getBook } from '../controllers/bookControllers.js'
import db from '../db.js'

const router = express.Router()

router.post('/addbook', (req, res) => {
  const sql = 'INSERT INTO books SET ?'
  const values = {
    "title": "harry",
    "description": "o takim co nie potrafił a zrobił",
    "cover": "lepiej nie"
  }
  db.query(sql, values, (error, data) => {
    if (error) throw error
    console.log(data)
    return res.json(data)
  })
})

router.route('/:id')
  .get(getBook)

export default router