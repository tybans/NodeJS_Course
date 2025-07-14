const http = require("http");
const requestHandler = require('./user')


const server = http.createServer(requestHandler)


const PORT = 3005;

server.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
