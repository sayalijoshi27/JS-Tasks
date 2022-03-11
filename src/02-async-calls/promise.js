const fs = require("fs");
const path = require("path");

const readFilePromise = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                reject({
                    message: "Error in reading file",
                    error: err
                })
                return;
            }
            resolve({
                message: "Data read successfully.",
                data: data
            })
        });
    })
} 

readFilePromise('file.txt').then((data) => {
    console.log('Data Read ========', data)
}).catch((err) => {
    console.log('Error =======', err)
})

const writeFilePromise = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if(err) {
                reject({
                    message: "Error in writing the data.",
                    error: err
                })
                return;
            }
            resolve({
                message: "Data written successfully.",
                data: data
            })
            console.log('Written data :::::::', data)
        })
    })
}

writeFilePromise('./newFile.txt', "Write data using promise").then((data) => {
    console.log('Data write =========', data)
}).catch((err) => {
    console.log('Error ===========', err)
});

