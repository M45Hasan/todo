const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db.js");
const nodemon = require("nodemon");
dotenv.config();
const route = require("./routes/index.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000);
dbConnect();
app.use(route);