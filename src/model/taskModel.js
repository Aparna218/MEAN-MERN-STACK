const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            require: true,
            trim: true
        },
        Description: {
            type: String,
            require: true,
            trim: true
        },
        Status: {
            type: String,
            require: true,
            enum : [Open, In-Progress, Completed]
    
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('task', taskSchema);