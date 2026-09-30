
let numbers = [10, 5, 20, 8, 15];
let sumarray=(arr)=>{
    let sum=0;
    
    arr.forEach(num => {
        sum=sum+num;
      
    });
    return sum;
}


console.log(sumarray(numbers))