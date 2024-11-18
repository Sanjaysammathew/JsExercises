let str =prompt("Enter a Sentence")
let sentence = str.split(' ');
function longest_word(){
    let longest = ""
    for(let i=0;i<sentence.length;i++){
        if(sentence[i].length>longest.length){
            longest = sentence[i]
        }
    }
    console.log("The Longest word:"+""+longest+""+"The longest word size is"+""+longest.length)
}
longest_word();