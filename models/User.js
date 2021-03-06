const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name:String,
    userName:String,
    email:String,
    password:String,
    forgotPasswordToken:String,
    forgotPasswordTime:Date,
    photoLink:{
        type: String,
        default:"avatar.png"
    }
})

module.exports = mongoose.model("User",userSchema)
