// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const rootDir = require("./utils/path");
const homeRouter = require("./routes/homeRoute");
const contactRouter = require("./routes/contactRoute");


const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded()); // It will create a body object in the request


app.use(homeRouter)
app.use(contactRouter);


app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});



app.post("/contact-us", (req, res, next) => {
  // console.log("Contact Us POST Middleware", req.url, req.method);
  res.send("");
});



const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
