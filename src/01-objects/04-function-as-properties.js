// function Employee(name, company) {
//   console.log("This is the constructor ");
//   this.name = name;
//   this.company = company;
//   // Method/ functions are objects
//   // method has to be shared ( part of function )
//   this.printName = function () {
//     console.log("This method is called");
//     console.log("Welcome  ", this.name);
//   };
// }

function Employee(name, company) {
  this.name = name;
  this.company = company;
  this.mainCompany = "Surfboard";
  // Method/ functions are objects
  // method has to be shared ( part of function )
  this.__proto__.printName = function () {
    console.log("This method is called");
    console.log("Welcome  ", this.name);
  };
  this.__proto__.parentCompany = "Surfboard";
}

Employee.prototype.random = "Random Variable";

let emp1 = new Employee("Anita", "Contentstack");
let emp2 = new Employee("Roop", "Contentstack");
let emp3 = new Employee("Nirav", "Surfboard");
let emp4 = new Employee("Rahul", "Surfboard");

// how many mainCompany = 4
// how many parentCompany = 1
