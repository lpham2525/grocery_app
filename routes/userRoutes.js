const router = require('express').Router()
const { query } = require('../db')
// const db = require('../db')
const orm = require('../orm')

// GET all users
router.get('/users', (req, res) => {
  orm.getAll('users', (users) => {
    console.log(users)
  })
})

// GET one user
router.get('/users/:selector', (req, res) => {
  let query = {}
  if (parseInt(req.params.selector)) {
    query = { id: parseInt(req.params.selector) }
  } else {
    query = { username: req.params.selector }
  }

  orm.getAllWhere('users', query, data => {
    let user = data[0]
    orm.getAllWhere('groceries', { userid: user.id }, groceries => {
      res.json({user, groceries })
    })
  })

//   db.query('SELECT * FROM users WHERE ?', { username: req.params.username }, (err, data) => {
//     if (err) { console.log(err) }
//     let user = data[0]
//     db.query('SELECT * FROM groceries WHERE ?', { userid: user.id }, (err, groceries) => {
//       if (err) { console.log(err) }
//       res.json({ user, groceries })
//     })
//   })
})

// POST a user
router.post('/users', (req, res) => {
  orm.createOne('users', req.body, info => {
    res.json(info)
  })
  // db.query('INSERT INTO users SET ?', req.body, err => {
  //   if (err) { console.log(err) }
  //   db.query('SELECT * FROM users WHERE ?')
  // })
})

module.exports = router
