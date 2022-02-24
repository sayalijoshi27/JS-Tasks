class Employee {
  constructor(name, company) {
    this.name = name;
    this.company = company;
    this.address = {
      street: "some street",
      pin: "401011",
    };
  }
  // class method
  printName() {
    console.log("Welcome", this.name);
  }
}

const emp1 = new Employee("Snehal", "Contentstack");
const emp2 = new Employee("Sayali", "Contentstack");
const test = {
  city: "Virar ",
  name: "Random Name",
};

// Object.keys(emp1).forEach((key) => {
//   emp3[`${key}`] = emp1[`${key}`];
// });

const emp3 = { ...emp1 }; // spread operation-- creates copy of emp1
// emp1 ===emp3 // false

// emp1.addreess = emp2.address // false(expected) --> true (observed)
