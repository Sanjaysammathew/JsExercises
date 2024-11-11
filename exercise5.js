let str = prompt("Enter a Word")
let arr =["a","e","i","o","u"]
function checkVowels(){
    let vowels = ""
    for(let i=0;i<str.length;i++){
        if(arr.includes(str[i])){
            vowels+=str.at(i)
        }
    }
    console.log("the result is:"+""+vowels.length)
}
checkVowels()