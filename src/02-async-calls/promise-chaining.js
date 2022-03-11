const fs = require("fs");

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

readFilePromise('./file.txt').then((fileName) => {
    console.log(' read ==============', fileName)
    let fileData = String(fileName.data);
    return fileData;
}).then((result) => {
    return writeFilePromise('./newFile.txt', result)
}).catch((err) => {
    console.log('Error', err)
})

