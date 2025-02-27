/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    await wait(t1)
  .then(function () {
    return wait(t2);
  })
  .then(function () {
    return wait(t3);
  });
  let finaltime=Date.now()
  return finaltime-initialtime;


}

module.exports = calculateTime;
