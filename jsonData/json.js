const fs = require("fs");

const objData = {
  name: "Rahul",
  age: 23,
  city: "Lucknow"
}

const jsonData = JSON.stringify(objData)
fs.writeFile("db.json", jsonData, (err) => {
  console.log(err)
  console.log("done")
})

fs.readFile("db.json", "utf-8", (err, data) => {
  const jsonObj = data
  const bioObj = JSON.parse(jsonObj)
  console.log(jsonObj)
  console.log(bioObj, bioObj.name)
});