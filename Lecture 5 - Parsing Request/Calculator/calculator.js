const calculator = (req, res) => {
  console.log("Calculate Request Handler", req.url);

  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);

    res.setHeader("content-thype", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Your result is ${result}</h1>
          
        </body>
      </html>`);

    return res.end();
  });
};

module.exports = calculator;
 