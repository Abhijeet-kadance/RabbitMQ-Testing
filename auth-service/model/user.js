const  mongoose = require('mongoose')

const user = new mongoose.Schema({
    id: String,
    userName: String
})

module.exports = mongoose.model("user", user)