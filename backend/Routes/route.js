const express=require("express");
const { getAllTasks, createTask, deleteTask, updateTask } = require("../Controllers/controller");
const router=express.Router();

router.get("/",getAllTasks)
router.post("/create",createTask)
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask)
module.exports={
    router
}