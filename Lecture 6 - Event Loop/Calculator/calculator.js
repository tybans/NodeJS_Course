const calculator = (req, res) => {
  console.log("1. Calculate Request Handler", req.url);

  const body = [];
  let result 
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Data Chunk Received", chunk);

  });

  req.on("end", () => {
    console.log("3. End eveqnt triggered");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    
  });
  console.log("4. Sending Response");
  
  res.setHeader("content-thype", "text/html");
  res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Your sum is ${result}</h1>
          
        </body>
      </html>`);

  return res.end();
};

module.exports = calculator;
