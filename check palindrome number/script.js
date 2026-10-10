let checkpalindromenum=(num)=>{
    let rev =num;
    let reverse=num.toString().split("").reverse("").join("");
     if (rev===Number(reverse)) {
        console.log(rev+" this is palindorme number");
        
     } else{
        console.log(rev+" this is not palindorme number");
        
     }
}
checkpalindromenum(122)