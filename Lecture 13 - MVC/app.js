// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// local Module
const storeRouter = require("./routes/storeRouter");
// const { hostRouter } = require("./routes/hostRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/path");
const errorController = require("./controllers/errorController");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");
app.set("views", path.join(rootDir, "views"));

app.use(bodyParser.urlencoded());
// app.use(express.urlencoded());

app.use(storeRouter);
app.use("/host", hostRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(rootDir, "public")));

// 404 Not Found Middleware
app.use(errorController.pageNotFound);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
