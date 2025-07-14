const http = require('http')


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('content-type', 'text/html')
  res.write('<html>')
  res.write('<head><title>tybans</title></head>')
  res.write('<body><h1>Welcome to the Home page</h1></body>')
  res.write('</html>')
  return res.end() 
  }
  else if (req.url === '/courses'){
    res.setHeader('content-type', 'text/html')
  res.write('<html>')
  res.write('<head><title>tybans courses</title></head>')
  res.write('<body><h1>Multiple courses</h1></body>')
  res.write('</html>')
  return res.end() 
  }
  else{
  res.setHeader('content-type', 'text/html')
  res.write('<html>')
  res.write('<head><title>tybans</title></head>')
  res.write('<body><h1>tybans classes</h1></body>')
  res.write('</html>')
  return res.end()  
  }
})


const PORT = 3005

server.listen(PORT, () => {
  console.log(`server connected at localhost://${PORT}`);
  
})