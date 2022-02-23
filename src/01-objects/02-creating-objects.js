// create a function

// Constructor function
function Employee(name, company) {
  this.name = name;
  this.company = company;
  //   return this; // implicit when you use new
}

let emp1 = new Employee("Anita", "Contentstack"); // instance of Employee
let emp2 = new Employee("Roop", "Contentstack");
