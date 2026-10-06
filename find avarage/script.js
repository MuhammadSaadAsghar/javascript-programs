let numbers = [10, 20, 30, 40, 50];

let FindAverage=(arr)=>{
    let avg=0
    arr.forEach(element => {
        avg=avg+element 
    });
    return avg/ arr.length
}

console.log(FindAverage(numbers));
