// let numbers = [5, 12, 8, 20, 15, 3, 25];
// function greaternum(arr) {
//     let count=0
//    arr.forEach(element => {
//     if (10<element) {
//         count++
//     }
//    }); 
//     return count;

// }
// console.log(greaternum(numbers));

let numbers = [5, 12, 8, 20, 15, 3, 25];
function lessthennum10(arr) {
    let count=0
   arr.forEach(element => {
    if (element<10) {
        count++
    }
   }); 
    return count;

}
console.log(lessthennum10(numbers));
