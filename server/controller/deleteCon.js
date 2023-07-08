const Todo = require("../model/todoModel.js");
async function deleteItem(req, res) {
  let { id } = req.body;
  console.log(id);
  let how = await Todo.deleteOne({ _id: id }).catch((err) => {
    console.error(err);
  });
}

module.exports = deleteItem;
