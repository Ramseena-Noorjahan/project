const mongoose = require('mongoose')
const user = new mongoose.Schema({
    fname:{type:"String",required:true},
    lname:{type:"String",required:true},
    email:{type:"String",required:true},
    password:{type:"String",required:true},
},
{collection:'user-data'}
)

const model = mongoose.model('UserData',user)


module.exports = model