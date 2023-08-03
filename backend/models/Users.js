const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    title:String,
    desc:String,
    status:String
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel