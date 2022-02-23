console.log("Objects in Javascript");
// Key Value pairs, Collection of name value pairs property value
// Container ...
// contain arrays, function as properties
// Cup --> Color handle model price ...
// Data Transfer Objects --> DTO --> how to use DTOS in nest js

// Js Object --> emp1 inherit some properties
// properties are functions and some identifiers
const emp1 = {
  name: "Anita",
  company: "Contentstack",
  designation: "Application Engineer",
  hobbies: ["Reading", "Singing", "Writing "],
  address: {
    flat: "22",
    street: "random street",
    pincode: 401011,
  },
};

// Create a copy of emp1
const emp2 = emp1;
const emp3 = emp1;
emp2.name = "Roop";

console.log("Emp1", emp1);
console.log("Emp2", emp2);
