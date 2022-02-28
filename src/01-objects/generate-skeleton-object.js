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

  const getSkeleton = (employee) => {
    console.log(employee)
    let skeleton = {}
    Object.keys(employee).forEach((key) => {
      skeleton[`${key}`] = employee[`${key}`].constructor.name
      console.log('get skeleton', key, skeleton[`${key}`], skeleton)
      if (skeleton[`${key}`]  === 'Array') {
        console.log('inside if')
        getSkeleton(skeleton[`${key}`])
      } else if (skeleton[`${key}`]  === "Object") {
        console.log('inside else if')
      }
    })
    return skeleton
  }

  let skeleton = getSkeleton(employee)