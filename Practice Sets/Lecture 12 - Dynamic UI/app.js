// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// local Module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");
app.set("views", path.join(rootDir, "views"));

app.use(bodyParser.urlencoded());
// app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(rootDir, "public")));

// 404 Not Found Middleware
app.use((req, res, next) => {
  
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    currentPage: "404",
  });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
