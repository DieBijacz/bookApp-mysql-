import db from "../db.js"

export const getBook = (req, res) => {
  console.log(req.params.id)
  res.json(`book number ${req.params.id}`)
}

export const getAllBooks = (req, res) => {
  const sql = 'SELECT * FROM books'
  const query = db.query(sql, (error, data) => {
    if (error) throw error
    console.log(data)
    return res.json(data)
  })
}

export const addBook = (req, res) => {
  // const sql = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
  const sql = 'INSERT INTO books SET ?'
  // const values = [
  //   req.body.title,
  //   req.body.description,
  //   req.body.cover,
  // ]
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
}