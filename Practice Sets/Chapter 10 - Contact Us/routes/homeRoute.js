// Core Module
const path = require("path");

// External Module
const express = require("express");

// local module
const rootDir = require("../utils/path");

const homeRouter = express.Router()


homeRouter.get("/", (req, res, next) => {
  console.log("First GET route Middleware", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;