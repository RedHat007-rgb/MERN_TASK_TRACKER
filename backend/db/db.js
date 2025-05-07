const mongoose=require("mongoose");

const connectdb=async (URL)=>{
    try{
        await mongoose.connect(URL);
        console.log("connected to db.....")
    }catch(e){
        console.log("Error occured while connecting to db....")
    }

}

module.exports={
    connectdb
}