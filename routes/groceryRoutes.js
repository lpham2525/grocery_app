const router = require('express').Router()
const db = require('../db')

// // GET all groceries
// router.get('/groceries', (req, res) => {
//   db.query('SELECT * FROM groceries', (err, groceries) => {
//     if (err) { console.log(err) }
//     res.json(groceries)
//   })
// })

// POST all groceries
router.post('/groceries', (req, res) => {
  db.query('INSERT INTO groceries SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
