const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);
server.use("/api/project", projectRouter);
server.use("/api/action", actionRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to WebAPI Challenge" });
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toTimeString()}] - ${req.method} to ${req.originalUrl}`
  );

  next();
}
module.exports = server;
