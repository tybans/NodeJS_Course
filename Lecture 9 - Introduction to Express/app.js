// Core Module
// const http = require("http");

// External Module
const express = require("express");

// Local Module
const requestHandler = require('./user.js');


const app = express();


// Middleware
app.use("/",(req, res, next) =>{
  console.log("First Middleware", req.url, req.method);
  // next()
  next()
})

app.use("/submit-details",(req, res, next) =>{
  console.log("second Middleware", req.url, req.method);
  res.send("<h1>Welcome to the second Middleware</h1>");
})

// const server = http.createServer(app);




const PORT = 4008;

// server.listen(PORT, () => {
//   console.log(`server connected at http://localhost:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
