const express = require("express");
const server = express();
const usersRouter = require("../routes/users.route");


// config routes here
server.get("/", (req, res) => {
  res.json("Welcome to pets api");
});

// albums routes
server.use(usersRouter);

module.exports = server;
