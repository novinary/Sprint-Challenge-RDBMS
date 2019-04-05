const express = require("express");
const server = express();
const projectRouter = require("../model_routers/project-router.js");
const actionRouter = require("../model_routers/action-router.js");

server.use(express.json());
//routers
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

// sanity check route
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
