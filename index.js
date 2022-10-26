const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const mongoose = require('mongoose')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

async function start() {
  const urlDB = `mongodb+srv://george648:<C9KjsJ0bjsxGJQEf>@cluster0.g7qsszt.mongodb.net/?retryWrites=true&w=majority`
  const PORT = process.env.PORT || 3000

  try {
    await mongoose.connect(urlDB, {
      useNewUrlParser: true
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

const userName = 'george648'
const password = 'C9KjsJ0bjsxGJQEf'

start()

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)


