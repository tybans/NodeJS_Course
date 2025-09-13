// Core Modules
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const rootDir = require("../utils/path");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  
  
  // res.sendFile(path.join(rootDir, "views", "home.html"));
  res.render("home", {registeredHomes: registeredHomes, pageTitle: 'Home', currentPage: "home" });
});

module.exports = userRouter;
