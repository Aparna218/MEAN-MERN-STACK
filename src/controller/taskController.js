const taskModel = require("../model/taskModel")

//Create Task
exports.createTask = async function(req,res){
    try {
        let data = req.body;
        let saveData = taskModel.create(data)
        return res.status(201).send({status:true,message:"Task created succesfully"})
        
    } catch (error) {
        return res.status(500).send({status:false,message : error.message,Data:saveData})
    }
}

// Get Task
exports.getTask = async function(req,res){
    try {
        let saveData = taskModel.find()
        return res.status(200).send({status:true,message:"Task got succesfully",Data:saveData})
        
    } catch (error) {
        return res.status(500).send({status:false,message : error.message})
    }
}

//Update Task
exports.updateTask = async function(req,res){
    try {
        let data = req.body;
        const update = await projectModel.findOneAndUpdate({Title:data.Title} , {$set:{Status:data.Status}} , {new:true})
        return res.status(200).send({status:true,message:"Task Updated succesfully",Data:update})
        
    } catch (error) {
        return res.status(500).send({status:false,message : error.message})
    }
}