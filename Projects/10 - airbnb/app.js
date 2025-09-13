// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/path");

const app = express();


app.use(bodyParser.urlencoded());
// app.use(express.urlencoded());

// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method}, Request URL: ${req.url}, Body: ${JSON.stringify(req.body)}`);
//   next();
// });


app.use(userRouter)
app.use("/host", hostRouter);


// 404 Not Found Middleware
app.use((req, res, next)=> {
  // res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
  // res.status(404).sendFile(path.join(rootDir, './', 'views', '404.html'));
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})



const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
