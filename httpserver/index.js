// to access the web pages of any web application, you need a web server. the web server will handle all the requests for the web application.
// Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously.


const http = require("http");

// the http.createServer() method includes request and response parameters which is supplied by Node.js


// the request object can be used to get information about the current HTTP request
// e.g. => url, request header, and data

const server = http.createServer((req, res) =>{
  if (req.url == "/"){
    res.write("welcome to home page");
    res.end();
  }else if (req.url == "/about"){
    res.write("welcome to about page");
    res.end();
  }else if (req.url == "/contact"){
    res.end("welcome to contact page");
  }else{
    res.writeHead(404, {"content-type": "text/html"});
    res.end("<h1> 404 page not found </h1>")
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening")
});