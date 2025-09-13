const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});



app.get("/", (req, res, next) => {
  console.log("First GET route Middleware", req.url, req.method);
  res.send("<h1>Welcome to tybans Classes</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Contact Us Middleware", req.url, req.method);
  res.send(`<h1>Welcome to the Contact Us Page</h1>
     <form action="/contact-us" method="POST">
      <label for="name">Name:</label>
      <br>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="email">Email:</label>
      <br>
      <input type="email" id="email" name="email" required>
      <br>
      <label for="message">Message:</label>
      <br>
      <textarea id="message" name="message" required></textarea>
      <br><br>
      <button type="submit">Submit</button>
     
     </form>
    
    
    
    `);
});


app.post("/contact-us", (req, res, next) => {
  console.log("Before Contact Us POST Middleware", req.url, req.method, req.body);
  next()
});

app.use(bodyParser.urlencoded()); // Middleware to parse URL-encoded bodies, it means that the body of the request will be parsed and available in req.body

app.post("/contact-us", (req, res, next) => {
  console.log("Contact Us POST Middleware", req.url, req.method, req.body);
  res.send("<h1>Thank you for contacting us!</h1>");
});



const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
