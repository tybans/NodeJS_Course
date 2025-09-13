// Core Module
const path = require("path");

// External Module
const express = require("express");

// local module
const rootDir = require("../utils/path");

const contactRouter = express.Router()


contactRouter.get("/contact-us", (req, res, next) => {
  console.log("First GET route Middleware", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {

  console.log("First GET route Middleware", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = contactRouter;