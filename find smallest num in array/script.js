let numbers=[1,3,4,-6,5,2,10]
let smallnum=(arr)=>{
    let numb =arr[0]
arr.forEach(num => {
    if (num<numb) {
       numb=num 
    }
});
return numb

}

console.log(smallnum(numbers))