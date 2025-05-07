const express=require("express");
require("dotenv").config();
const app=express();
const cors=require("cors");
const { connectdb } = require("./db/db");
const { router }=require('./Routes/route')
const PORT=process.env.PORT ;
const URL=process.env.MONGO_URL


app.use(express.json());

app.use(cors({
    methods:['GET','POST','PATCH','DELETE'],
    origin:"http://localhost:5173"
}))


app.use("/api",router);



const start=async ()=>{
    await connectdb(URL);
    app.listen(PORT,()=>{
        console.log(`server is listening to ${PORT}`);
    })
}

start();