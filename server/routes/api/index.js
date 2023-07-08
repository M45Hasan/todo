const express = require("express");
const _ = express.Router();
const authRoute = require("../../controller/todoController.js");
const listRoute = require("../../controller/todoListCon.js");
const deltRoute = require("../../controller/deleteCon.js");

_.post("/auth", authRoute), _.get("/list", listRoute);
_.post("/del", deltRoute);

module.exports = _;
