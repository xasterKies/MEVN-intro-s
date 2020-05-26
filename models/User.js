const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Schema = new Schema({
    name: String,
    email: String
})

const UserSchema = new Schema({
    name: String, 
    email: String
})

const user_resource = new User({
    name: 'John Doe',
    email: 'john@doe.com'
})

user_resource.save((error) => {
    if(error)
        console.log(error);

    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})

const User = mongoose.model('User', UserSchema)
module.exports = Users