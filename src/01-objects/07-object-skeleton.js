const generateSkeleton = (obj, skeleton = {}) => {
  Object.keys(obj).forEach((key) => {
    switch (obj[`${key}`].constructor.name) {
      case "Object":
        skeleton[`${key}`] = {};
        generateSkeleton(obj[`${key}`], skeleton[`${key}`]);
        break;

      case "Array":
        skeleton[`${key}`] = obj[`${key}`].map((member) => {
          return generateSkeleton(member);
        });
        break;

      default:
        skeleton[`${key}`] = obj[`${key}`].constructor.name;
    }
  });

  // final skeleton
  return skeleton;
};

const emp = {
  name: "Nirav",
  pincode: 401440,
  address: {
    street: "random ",
    flat: 101,
    estd: new Date(),
  },
  hobbies: [
    "read",
    {
      game: "cricket",
      favPlay: {
        india: "Kolhi",
        sa: "ABD",
      },
    },
  ],
};

let skeleton = generateSkeleton(emp);
console.log("Output", { input: emp, output: skeleton });
