const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3008;

server.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
