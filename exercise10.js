let str1 = prompt("Enter a Sentence ")
let sentence = str1.split(' ');
let rev_array =""
for(let i=sentence.length-1;i>=0;i--){
rev_array+=sentence[i]
}
console.log(rev_array)