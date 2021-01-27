const objectData = {
  name: "Rahul",
  age: 23,
  city: "Lucknow"
}

// stringify(), when we have to convert object into JSON
const jsonData = JSON.stringify(objectData)
console.log(jsonData);
// {"name":"Rahul","age":23,"city":"Lucknow"}


// parse(), when we have to convert json data to normal object
const objData = JSON.parse(jsonData)
console.log(objData);
// { name: 'Rahul', age: 23, city: 'Lucknow' }