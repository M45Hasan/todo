const Todo = require("../model/todoModel.js");
async function authCon(req, res) {
  let { name, email, pass } = req.body;

  let how = await Todo.find({ email });

  if (how.length > 0) {
    res.send("ami asi tw");
  } else {
    let mong = new Todo({
      name,
      email,
      pass,
    });
    mong.save();
    res.send(mong);
  }
}

module.exports = authCon;
