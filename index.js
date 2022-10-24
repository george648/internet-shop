const express = require('express')
const app = express()
const expressHb = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/course')

const hbs = expressHb.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(homeRoutes)
app.use(addRoutes)
app.use(coursesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(123, PORT))
