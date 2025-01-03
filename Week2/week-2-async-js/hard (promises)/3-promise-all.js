/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function random(resolve, n) {
    setTimeout(resolve, n*1000);
}

function wait(n) {
    let p = new Promise((resolve)=>{random(resolve,n)});
    return p;
}

async function calculateTime(t1, t2, t3) {
    let initialtime=Date.now();
    let p1=wait(t1);
    let p2=wait(t2);
    let p3=wait(t3);
    await Promise.all([p1,p2,p3])
    let finaltime=Date.now()
    return finaltime-initialtime;
}

module.exports = calculateTime;
