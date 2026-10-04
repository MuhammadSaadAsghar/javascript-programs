
let checkpalindorme=(str)=>{
let rev=str;
let reve=rev.split("").reverse().join("");
if (str===reve) {
    console.log("it is palindorme");
    return true
}
else{
    console.log("it is not palindorme");
    return false
}

}

checkpalindorme("mam");
