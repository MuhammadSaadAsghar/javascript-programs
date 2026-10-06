let numbers = [0, 5, 0, -2, 8, 0, 10, 0];

let countzeros=(arr)=>{
    let count=0;
arr.forEach(element => {
    if (element===0) {
        count++
    }

});
return count
}
console.log(countzeros(numbers));
