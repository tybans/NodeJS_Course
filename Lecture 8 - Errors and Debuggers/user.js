const { error } = require("console");
const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>tybans</title></head>");
    res.write("<body><h1>Welcome to the Home page</h1></body>");
    res.write('<form action="/submit-details" method="POST"><br>');
    res.write('<label for="username">User Name</label><br>');
    res.write(
      '<input type="text" placeholder="Enter your name" id="username" name="username"> <br><br>'
    );
    res.write('<label for="gender">Gender</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      // Blocking code
      // fs.writeFileSync('user.txt', JSON.stringify(bodyObject))

      // Non-blocking code
      fs.writeFile("user.txt", JSON.stringify(bodyObject), (error) => {
        console.log("Data written to file successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    // res.statusCode = 302
    // res.setHeader('Location', '/')
    // return res.end()
  } else {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>tybans</title></head>");
    res.write("<body><h1>tybans classes</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
