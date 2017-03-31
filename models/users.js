const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    age: Number,
    location: String
})

module.exports = mongoose.model('User', UserSchema)
