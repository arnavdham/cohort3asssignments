// function random(resolve)
// {
//     setTimeout(resolve,3000);
// }

// let p =new Promise(random);

// function callback()
// {
//     console.log("Done");
// }
// p.then(callback);

const fs=require("fs");

function readthefile(resolve,FileName)
{
    fs.readFile(FileName,"utf-8",function(err,data){
        resolve(data);
    });
}

// function readFile(FileName)
// {
//     return new Promise(readthefile(resolve,FileName)); ye nahi chalega 2nd arg is for reject
// }

function readFile(FileName) {
    return new Promise((resolve) => {
        readthefile(resolve, FileName); // Pass resolve to readthefile
    });
}

// function createPromiseExecutor(FileName) {
//     // Return a function that takes resolve as an argument
//     return function promiseExecutor(resolve) {
//         readthefile(resolve, FileName); // Call readthefile with the resolve function and FileName
//     };
// }

// function readFile(FileName) {
//     const executor = createPromiseExecutor(FileName); // Create the executor function with the specific FileName
//     return new Promise(executor); // Pass the executor function to the Promise
// }

const p=readFile("a.txt");

function callback(contents)
{
    console.log(contents);
}

p.then(callback);