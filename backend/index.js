const express=require("express");
// const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const UserModel=require('./models/Users')
const PORT=process.env.PORT || 5000
const app=express()
app.use(cors())
app.use(express.json())
dotenv.config()
require("./db/conn");


app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})    
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        title:req.body.title,desc:req.body.desc,status:req.body.status})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




app.listen(PORT,()=>{
    console.log("Server is Running");
})