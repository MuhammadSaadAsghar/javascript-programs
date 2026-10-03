let name="javascript"

let countvowel=(str)=>{
    let count=0;
    str.split("").forEach(element => {
        if ("a"==element||"e"==element||"i"==element||"o"==element||"u"==element) {
           count++ 
        }

    });
    return count
}
console.log(countvowel(name));
