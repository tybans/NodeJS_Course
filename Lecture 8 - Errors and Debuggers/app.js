const http = require("http");
const testingSyntax = require('./syntax.js')
const runtime = require('./runtime.js')
const logical = require('./logical.js');
const requestHandler = require('./user.js');



const server = http.createServer(requestHandler)


// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   // testingSyntax()
//   // runtime()
//   logical()
// });

const PORT = 4008;

server.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
