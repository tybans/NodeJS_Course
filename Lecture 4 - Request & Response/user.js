const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>tybans</title></head>");
    res.write("<body><h1>Welcome to the Home page</h1></body>");
    res.write('<form action="/submit-details" method="POST"><br>');
    res.write('<label for="username">User Name</label><br>');
    res.write(
      '<input type="text" placeholder="Enter your name" id="username name="username"> <br><br>'
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
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {

    fs.writeFileSync('user.txt', 'Taiyab Ansari')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>tybans</title></head>");
  res.write("<body><h1>tybans classes</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3005;

server.listen(PORT, () => {
  console.log(`server connected at localhost://${PORT}`);
});
