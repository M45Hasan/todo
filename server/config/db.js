const mongoose = require("mongoose");

function dbConnect() {
  mongoose
    .connect(
      "mongodb+srv://h123:h123@cluster0.voqek12.mongodb.net/todo?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log("MongoErro:", err.code);
    });
}

module.exports = dbConnect;