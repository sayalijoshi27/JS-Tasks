const employee = {
    name: "Nirav Patel",
    birthdate: new Date(new Date()),
    address: {
      flat: 201,
      street: "Random Street",
      pincode: 401101,
    },
    hobbies: [
      { activity: "Reading" },
      { activity: "Singing" },
      { activity: "Troubling others by asking questions" },
    ],
  };

  const getSkeleton = (employee, structure = {}) => {
    Object.keys(employee).forEach((key) => {
      if (employee[`${key}`].constructor.name  === 'Object') {
        structure[`${key}`] = {}
        getSkeleton(employee[`${key}`], structure[`${key}`])
      } else if (employee[`${key}`].constructor.name  === 'Array') {        
        structure[`${key}`] = employee[`${key}`].map((ele) => {
          return getSkeleton(ele)
        })
      } else {
        structure[`${key}`] = employee[`${key}`].constructor.name
      }
    })
    return structure
  }
  let structure = {}
  let skeleton = getSkeleton(employee, structure)
 
  console.log("Output", { input: employee, output: skeleton });