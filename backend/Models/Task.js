const mongoose=require("mongoose");


const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        minlength:[10,"Require at least 10characters..."],
        maxLength:[50],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    completed:{
        type:Boolean,
        default:false
    }
})


const Task=mongoose.model("Task",Schema);


module.exports={
    Task
}