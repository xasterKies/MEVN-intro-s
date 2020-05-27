const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Schema = new Schema({
    name: String,
    email: String
})


const User = mongoose.model('User', UserSchema)
module.exports = Users