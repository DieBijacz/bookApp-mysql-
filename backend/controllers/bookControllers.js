export const getBook = (req, res) => {
  console.log(req.params.id)
  res.json(`book number ${req.params.id}`)
}