const http = require('http')
const calculator = require('./calculator')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Calculator</title></head>')
    res.write('<body>')
    res.write('<h1>Welcome To The tybans Calculator</h1><br>')
    res.write('<a href="/calculator" > Go to Calculator</a><br>')
    res.write('</body>')

    res.write('</html>')
    return res.end()
  }
  else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('content-thype', 'text/html')
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>tybans Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Number" name="first"><br><br>
            <input type="text" placeholder="Second Number" name="second"><br><br>
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>`
    )
    return res.end()
  }  else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    return calculator(req, res)
  }
  

  res.setHeader('content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>404</title></head>')
    res.write('<body>')
    res.write('<h1>404 Not Found</h1><br>')
    res.write('<a href="/" > Got to Home Page</a><br>')
    res.write('</body>')

    res.write('</html>')
    return res.end()
  
})


const PORT = 5008

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
})