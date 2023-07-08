const Todo = require("../model/todoModel.js");
async function todoList (req,res){
    let data = await Todo.find({})
    res.send(data)
}

module.exports=todoList