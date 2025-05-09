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
      const allowedFields = ["name", "description", "completed"];
  const updates = {};

  for (const key of allowedFields) {
    if (req.body.hasOwnProperty(key)) {
      updates[key] = req.body[key];
    }
  }
  if (updates.length == 0) {
    res.status(200).json({
      msg: `please provide aleast one field to update`,
    });
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return res.status(404).send({ error: "Task not found" });
  }
  res.status(200).json({
    msg: {
      title: `${updatedTask.title}`,
      description: `${updatedTask.description}`,
      completed: `${updatedTask.completed}`,
    },
  });
   
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