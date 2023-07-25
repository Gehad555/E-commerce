const mongoose = require('mongoose')


const UserShcema = mongoose.Schema({
    FirstName : "string" ,
    LastName  : "string" ,
    UserName  : "string",
    Email:{
        type:String,
        unique : true  ,
        required: true 
    },
    Password:{
        type: String ,
        required :true 
    }

})


module.exports = UserShcema