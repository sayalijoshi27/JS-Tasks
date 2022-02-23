function Employee(name, company) {
  this.name = name;
  this.company = company;
  this.printName = function () {
    console.log("Welcome  ", this.name);
  };
}

let emp1 = new Employee("Anita", "Contentstack");
let emp2 = new Employee("Roop", "Contentstack");

// function Employee(name, company) {
//   this.name = name;
//   this.company = company;
//   //   return this; // implicit when you use new
// }

// function printName() {
//   console.log("Welcome  ", this.name);
// }
// const emp1 = {
//   name: "Anita",
//   company: "Contentstack",
//   printName: printName,
// };

// const emp2 = {
//   name: "Roop",
//   company: "Contentstack",
//   printName: printName,
// };

//
