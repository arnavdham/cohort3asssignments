/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function random(resolve, n) {
    setTimeout(resolve, n);
}

function sleep(n) {
    let p = new Promise((resolve)=>{random(resolve,n)});
    return p;
}

module.exports = sleep;
