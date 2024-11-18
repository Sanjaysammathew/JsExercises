let str1= prompt("Enter a Sentence")
let sentence = str1.split(' ')

function Counting(){
    let object1 ={}
    for(i=0;i<sentence.length;i++){
        let word= sentence[i]
        if(object1[word]){
            object1[word]++
        } 
        else{
            object1[word]=1
        }
    }

    let keys = Object.keys(object1);
    for (let i = 0; i < keys.length; i++) {
        let word = keys[i];
        console.log(`${word}: ${object1[word]}`);
    }
    
}
Counting()