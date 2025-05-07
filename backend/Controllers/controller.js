const { Task } = require("../Models/Task.js")


const getAllTasks=async (req,res)=>{
    try{
        const tasks=await Task.find({})
        res.status(200).json({
            tasks
        })
    }catch(e){
        res.status(400).json({
            message:"Error fetching Tasks.Please try again after sometime...😭"
        })
    }
    
}
const updateTask=async (req,res)=>{
    const name=req.params.name;
    console.log(name);
    const updated_name=req.body.name;
    const updated_description=req.body.description;
    const completed=req.body.completed;

    const updated_fields={};
    if(updated_name!=undefined) updated_fields.name=updated_name;
    if(updated_description!=undefined) updated_fields.description=updated_description;
    if(completed!=undefined) updated_fields.completed=completed;
    updated_fields.date=Date.now();
    
    if (Object.keys(updated_fields).length === 1 && Object.keys(updated_fields)[0] === 'date') {
     return res.status(400).json({
      message: 'At least one field (name, description, or completed) must be provided for update',
    });
  }
        
    try{
       if(name==undefined ||  name.trim()===""){
         return res.json({
            message:"Name field shouldn't be empty.."
        }).status(404)
       }
        const updated_Task=await Task.findOneAndUpdate({ name: { $regex: `^${name}$`, $options: 'i' } },{$set:updated_fields},{ new: true, runValidators: true })
       

        if(!updated_Task){
            return res.json({
            message:"Please give the valid name to update the task"
        }).status(404)
        }
         res.json({
            message:"updating tasks completed...."
        })
    }catch(error){
        return  res.status(500).json({
        message: 'Please try again later 😭',
    });
    }
   
}
const createTask=async (req,res)=>{
    const name=req.body.name;
    const description=req.body.description;
    try{
        await Task.create({
            name:name,
            description:description
        })
        res.status(200).json({
            message:"Task Successfully created☺️"
        })
    }catch(e){
        res.status(400).json({
            message:"Please try again after sometime...😭"
        })
    }
}
const deleteTask=async (req,res)=>{
    const delete_task=await Task.findByIdAndDelete(req.params.id);
    if(!delete_task){
         return  res.json({
            message:"Please give the valid name to update the task"
        }).status(404)
    }
    res.status(200).json({
        message:"Successfully deleted"
    })
}


module.exports={
    getAllTasks,
    updateTask,
    createTask,
    deleteTask
}