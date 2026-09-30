// let numbers=[0,0,5,6,4,4,3,6,2,5,7,5,4]

// let duplicatenum=(arr,target)=>{
//     let count=0
//     arr.forEach(num => {
//         if (num===target) {
//             count++
//         }
//     });
//     return count
// }
// console.log(duplicatenum(numbers,3));


let numbers=[0,0,5,6,4,4,3,6,2,5,7,5,4]

let  count={}

numbers.forEach((num)=>{
if (count[num]) {
    count[num]++
    
}
else{
    count[num]=1
}
})
console.log(count);
