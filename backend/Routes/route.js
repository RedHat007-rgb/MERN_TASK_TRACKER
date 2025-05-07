const express=require("express");
const { getAllTasks, createTask, deleteTask, updateTask } = require("../Controllers/controller");
const router=express.Router();

router.get("/",getAllTasks)
router.post("/create",createTask)
router.route("/:name").delete(deleteTask).put(updateTask);

module.exports={
    router
}