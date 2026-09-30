// let numbers = [-5, 10, -2, 8, 0, 15, -3];
// let count=0
// let countpositive=(arr) => {
// arr.forEach(num => {

//     if (0<num) {
//       count++
//     }
// });
// return count;
// }

// console.log(countpositive(numbers))


let numbers = [0, 5, 0, -2, 8, 0, 10, 0];
let count = 0
let countpositive = (arr) => {
    arr.forEach(num => {
  if (num==0) {
    count++
  }
    });
    return count;
}

console.log(countpositive(numbers))

