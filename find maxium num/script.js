// function findMax(arr) {
//     let max = arr[0];

//     arr.forEach((num) => {
//        if (num>max) {
//         max=num;

//        }   
//     });

//     return max;
// }

// let numbers = [10, 25, 8, 40, 15, 32];

// console.log(findMax(numbers));

function findMax(arr) {
    let max = arr[0];

    arr.forEach((num) => {
        
        if (num>max) {
            max=num
        }
        // tumhari logic

    });

    return max;

}
let numbers = [5, 12, 7,25, 20];

console.log(findMax(numbers));

