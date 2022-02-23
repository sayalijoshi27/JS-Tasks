// Constructor function
// activity
// function Employee(name, company) {
//   this.name = name;
//   this.company = company;
//   //   return this; // implicit when you use new
// }

// this ==> new object created by class or constructor function

//steamer == blueprint
class Employee {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }
}

// idli
let emp1 = new Employee("Anita", "Contentstack"); // instance of Employee
let emp2 = new Employee("Roop", "Contentstack");

// Syntactic Sugar
// Wrapper over constructor function
