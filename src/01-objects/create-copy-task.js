// class Employee {
//     constructor(name, company) {
//       this.name = name;
//       this.company = company;
//       this.address = {
//         street: "some street",
//         pin: "401011",
//         location: {
//             state: "Maharashtra",
//             city: "Virar"
//         }
//       };
//     }
//     // class method
//     printName() {
//       console.log("Welcome", this.name);
//     }
//   }

//   const emp = new Employee("Sayali", "Contentstack");

  function createCopy (obj) {
      const objCopy = {
        ...obj,
        address: {
            ...obj.address,
            location: {
                ...obj.address.location
            }
        }
      }
      return objCopy
  }

  // let clonedObj = copyObject(emp);
  // console.log("copy of an object output", {input: emp, output: clonedObj})

  const obj = {
    name: "Sayali",
    company: "Contentstack",
    address: {
      street: "some street",
        pin: "401011",
        location: {
            state: "Maharashtra",
            city: "Virar"
        }
    }
  }

  let objectCopy = createCopy(obj)
  console.log("Create Copy Output", { input: obj, output: objectCopy });

  const sayaliStatus = [
    {
      task1: "Generating skeleton of an Object",
      status: "In progress",
    },
    {
      task2: "Creating copy of an object",
      status: "Completed",
    },
    {
      task3: "Unusual behaviour of spread operator",
      status: "Completed waiting for the result"
    }
  ]