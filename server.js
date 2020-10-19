require('dotenv').config()
const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// var PORT = process.env.PORT || 3000

// require('./routes/routes')(app)
// var db = require('./models')
// db.sequelize.sync().then(function () {
//   app.listen(process.env.PORT || PORT, function () {
//     console.log("listening on port " + PORT)
//   })
// })

app.listen(process.env.PORT || 3000, () => console.log('server running'))
