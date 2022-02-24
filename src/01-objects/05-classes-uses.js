// function Employee(name, company) {
//   this.name = name;
//   this.company = company;
//   this.mainCompany = "Surfboard";
//   // Method/ functions are objects
//   // method has to be shared ( part of function )
//   this.__proto__.printName = function () {
//     console.log("This method is called");
//     console.log("Welcome  ", this.name);
//   };
//   this.__proto__.parentCompany = "Surfboard";
// }

class Employee {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }
  // class method
  printName() {
    console.log("Welcome", this.name);
  }
}

const emp1 = new Employee("Snehal", "Contentstack");
const emp2 = new Employee("Sayali", "Contentstack");
