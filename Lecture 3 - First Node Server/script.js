const http = require('http')

function requestListener(req, res) {
  console.log(req);
  process.exit() //Stops event Loop
  
}

const server = http.createServer(requestListener)

// OR


// With anonymous function
// const server = http.createServer(function(req, res) {
//   console.log(req);
  
// })

// // OR with Arrow Functin
// const server = http.createServer((req, res) => {
//   console.log(req);
  
// })

const PORT = 3032
server.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
  
})