function stretch() {
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("done stretching");
//     resolve();
//   }, 1000);
// });

const boolVal = true

return new Promise((resolve, reject) => {
  if(boolVal) {
    resolve("this is inside the promise resolve.")
  } else {
    reject()
  }
});
}
//  const str = stretch(
//   console.log(str)
// )

function runOnTreadmill() {
  //console.log(num)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("done running on treadmill")
     resolve();
    }, 500)
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("done lifting weights")
    }, 2000)
  })
}

function workout() {

  // stretch();
  // runOnTreadmill();
  // liftWeights();
  // console.log("done working out")

  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => console.log("done working out"))
  .catch((err) => console.error(err))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
