let str1 = prompt("Enter a Sentence")
let capital =""
let smallest = ""
for(let i=0;i<str1.length;i++){
    if(i==0){
        let value = str1[0].toUpperCase()
        capital+=value
    }else{
        smallest+=str1[i]
    }
}
console.log(capital+smallest)


// let str1 = prompt("Enter a Sentence");
// let capital = str1[0].toUpperCase(); // Capitalize the first character
// let smallest = str1.slice(1);        // Get the rest of the string as is

// console.log(capital + smallest);     // Combine and display the result
