/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function random(resolve, n) {
    setTimeout(resolve, n*1000);
}

function wait(n) {
    let p = new Promise((resolve)=>{random(resolve,n)});
    return p;
}

module.exports = wait;
