// objectname.property
let age = person.age;
// objectname["property"]
let age = person["age"];
// objectname[expression]
let age = person[x];
// Dot notation
objectname.propertyname
person.firstname + "is" + person.age;
// Bracket notation
objectname["propertyname"]
person["firstname"] + "is" + person["age"];
// More bracket notation
let n1 = "firstName";
let n2 = "lastName";
let name = person[n1] + " " + person[n2];
// Changing properties
person.age = 30;
person["age"] = 30;
// Adding properties
person.city = "New York";
person["country"] = "USA";
// Deleting properties
delete person.age;
delete person["age"];
// Checking if a property exists
if ("age" in person) {
  console.log("Age exists in person");
} else {
  console.log("Age does not exist in person");
}
// Nested objects
myObj = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  }
  age: 30,
  myCars: ["Ford", "BMW", "Fiat"]
};
// Accessing nested properties
myObj.myCars.car2; // "BMW"
myObj.myCars["car2"]; // "BMW"
myObj ["myCars"]["car2"]; // "BMW"

let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2]; // "BMW"