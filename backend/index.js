import express from 'express'
import booksRoutes from './routes/bookRoutes.js'
import userRoutes from './routes/userRoutes.js'
import db from './db.js'

const app = express()
app.use(express.json())

// Connect to DB
db.connect((error) => {
  if (error) throw error
  console.log('Mysql connected')
})

// Routes
app.get('/', (req, res) => {
  res.json('home page')
})
app.use('/book', booksRoutes)
app.use('/user', userRoutes)

app.listen(5000, () => {
  console.log('App listens on 5000')
})