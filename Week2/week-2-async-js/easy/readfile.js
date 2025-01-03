const fs=require('fs');
fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log("File content:", data); //then this as this operation is asyncrounos
});

console.log("hi"); //executes first 
