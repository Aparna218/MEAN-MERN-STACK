const express = require("express")
const { createTask, getTask, updateTask } = require("../controller/taskController")
const router = express.Router()



router.post("/createTask",createTask);
router.get("/getTask",getTask);
router.put("/updateTask",updateTask)



module.exports=router