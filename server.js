const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const User = require('./models/users')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/simple-api')

app.use(bodyParser.json())

app.get('/user', (req, res) => {
  User.find((err, users) => {
    if (err)
      res.send(err)

    res.json(users)
  })
})

app.post('/user', (req, res) => {
  const user = new User()

  user.username = 'Ray'
  user.age = 26
  user.location = 'Vancouver'

  user.save((err, user) => {
    if (err)
      res.send(err)

    res.json(user)
  })
})

app.listen(8080, () => console.log('Server is up & running a ok'))
