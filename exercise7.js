let str1=prompt("Enter a word")
let str2=""
function palindrome(){
    for(let i=str1.length-1;i>=0;i--){
        str2 += str1[i]
    }
    console.log(str2)

    if (str1 === str2) {
        console.log("The word is a palindrome.");
    } else {
        console.log("The word is not a palindrome.");
    }
}
palindrome();