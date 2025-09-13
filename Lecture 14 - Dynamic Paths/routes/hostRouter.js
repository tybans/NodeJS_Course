// External Modules
const express = require("express");
const hostRouter = express.Router();


// Local Module
// const { getAddHome } = require("../controllers/homes");
const hostController = require("../controllers/hostController");

// hostRouter.get("/add-home", getAddHome);
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);

// exports.hostRouter = hostRouter;
module.exports = hostRouter;
