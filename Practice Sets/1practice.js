/*
Create a page that shows a navigation bar of Myntra with the following links:
Home
Men
Women
Kids
Cart
Clicking on the each link page should navigate to that page and a welcome section text is shown there 
*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Navigation Page</title>");
    res.write("</head>");
    res.write("<body>");

    res.write("<h1>Welcome to Navigation Page</h1>");
    res.write('<a href="/home">Home</a> <br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a><br>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/home") {
    res.setHeader("Location", "/home");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Home Page</title>");
    res.write("</head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Location", "/men");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Men Page</title>");
    res.write("</head>");
    res.write("<body><h1>Welcome to Men Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Location", "/women");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Women Page</title>");
    res.write("</head>");
    res.write("<body><h1>Welcome to Women Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Location", "/kids");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Kids Page</title>");
    res.write("</head>");
    res.write("<body><h1>Welcome to Kids Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Location", "/cart");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Cart Page</title>");
    res.write("</head>");
    res.write("<body><h1>Welcome to Cart Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3035;

server.listen(PORT, () => {
  console.log(`Server is running at loacalhost:${PORT}`);
});
