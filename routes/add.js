const { Router } = require('express')
const Coruse = require('../models/course')
const router = Router()

router.get('/add', (req, res) => {
  res.render('add', {
    title: 'add course',
    isAdd: true
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  res.redirect('/courses')
})

module.exports = router
