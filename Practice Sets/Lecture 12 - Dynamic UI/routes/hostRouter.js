const path = require("path");

const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/path");

hostRouter.get("/add-home", (req, res, next) => {

  // res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
  res.render("addHome", {
    pageTitle: "Add Home", currentPage: "addHome",});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {

  console.log('Home Registered Successfully for:', req.body);
  registeredHomes.push(req.body);
  // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
  res.render("homeAdded", {
    pageTitle: "Home Added", currentPage: "homeAdded",});
});

// module.exports = hostRouter;
exports.registeredHomes = registeredHomes;  
exports.hostRouter = hostRouter;
