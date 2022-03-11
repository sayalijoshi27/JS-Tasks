const fs = require("fs");
const path = require('path')
const callBackFunction = (err, data) => {
    if (err) throw err;
    // Display the file content
    console.log("file data", data);
    fs.writeFile('./newFile.txt', data, (err) => {
        if (err) {
            fs.writeFile('./logs.txt', 'Error', (err) => {
                if (err)  throw err;
                console.log("Error", err);
            })
        } else {
            fs.writeFile('./logs.txt', 'Write Operation Completed.', (err) => {
                if (err)  throw err;
                console.log("logs", 'Write Operation Completed.');
            })
        }
        console.log("new file data", data);
    });
}

const readFile = new Promise((resolve, reject) => {
    
})