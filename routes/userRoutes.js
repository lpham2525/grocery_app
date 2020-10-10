const router = require('express').Router()
const { query } = require('../db')
const db = require('../db')

// GET one user
router.get('/users/:selector', (req, res) => {
  if (parseInt(req.params.selector)) {
    query = { id: parseInt(req.params.selector) }
  } else {
    query = { username: req.params.selector }
  }
  console.log(parseInt(req.params.username ? true : false))
  db.query('SELECT * FROM users WHERE ?', { username: req.params.username }, (err, data) => {
    if (err) { console.log(err) }
    let user = data[0]
    db.query('SELECT * FROM groceries WHERE ?', { userid: user.id }, (err, groceries) => {
      if (err) { console.log(err) }
      res.json({ user, groceries })
    })
  })
})

// POST a user
router.post('/users', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, err => {
    if (err) { console.log(err) }
    db.query('SELECT * FROM users WHERE ?')
  })
})

module.exports = router
