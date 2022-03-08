const fs = require("fs");

const callBackFunction = (err, data) => {
    if (err) throw err;
    // Display the file content
    console.log("file data", data);
    fs.writeFile('./newFile.txt', data, (err) => {
        if (err) throw err;
        console.log("new file data", data);
    });
}

fs.readFile('./file.txt', "utf8", callBackFunction);