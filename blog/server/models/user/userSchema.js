const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid:String,
    username:String,
    githubAccount:String,
    password:String
})

module.exports = userSchema;