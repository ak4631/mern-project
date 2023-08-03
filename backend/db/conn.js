const mongoose=require("mongoose");


const DB="mongodb+srv://efgh37716:Akash1973@cluster0.sqamujg.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection started")).catch((err)=>console.log(err));