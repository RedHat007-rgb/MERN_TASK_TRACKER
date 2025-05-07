const express=require("express");
require("dotenv").config();
const app=express();
 const cors=require("cors");
const PORT=process.env.PORT ;

app.use(cors({
    methods:['GET','POST','PATCH','DELETE'],
    origin:"http://localhost:5173"
}))

app.use(express.json());


app.get("/",(req,res)=>{
    res.json("TASK_TRACKER")
})

app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`);
})