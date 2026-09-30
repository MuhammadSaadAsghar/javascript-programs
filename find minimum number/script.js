function findmin(arr) {
    let min=arr[0]
  
    arr.forEach( (num)=> {
        if (num<min) {
           min=num 
        }
    });
    return min;
}
let numbers=[10,12,14,4,15,16,1,0]

console.log(findmin(numbers))