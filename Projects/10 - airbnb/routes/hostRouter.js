const path = require("path");

const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/path");

hostRouter.get("/add-home", (req, res, next) => {
  // console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  // res.send(`<h1>Register your home here: </h1>
  //   <form action="/host/add-home" method="POST">
  //     <input type="text" name="houseName" placeholder="Home Name" required/>
  //     <input type="submit"/>
  //   </form>

  // res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));

  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
  // console.log(`Request Method: ${req.method}, Request URL: ${req.url}, Body: ${JSON.stringify(req.body)}`);
  // res.send(
  //   `<h1>Home registered Successfully! </h1>
  //   <a href="/">Back to Home</a>
  //   `);

  // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'));

  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;
