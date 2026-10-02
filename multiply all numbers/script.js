let numbers=[1,3,2,4,5,6,8,,9,10,15]

let multiplynum=(arr)=>{
    let mul=arr[0]

    arr.forEach(num => {
        mul=mul*num
    });
    return mul
}

console.log(multiplynum(numbers))