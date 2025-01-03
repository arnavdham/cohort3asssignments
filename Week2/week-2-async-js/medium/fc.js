const fs = require('fs');
fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    const trimmedData = data.trim(); 

    fs.writeFile('a.txt', trimmedData, 'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log("File updated successfully.");
    });
});
