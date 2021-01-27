const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

  const data = fs.readFileSync("db.json", "utf-8" )
  const objData = JSON.parse(data)

  if (req.url == "/"){
    res.write("welcome to home page");
    res.end()
  }
  // else if (req.url == "/users"){
  //   fs.readFile("db.json", "utf-8", (err, data) => {
  //     res.write(data)
  //     res.end()
  //   })
  // }
  else if (req.url == "/users"){
    if(err) throw err;
    res.write(data)
    res.end()
  }
})

server.listen(3001)