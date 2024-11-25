let arr = [];
let uniqueArr = [];
let size = parseInt(prompt("Enter the size of the array"));

function CreatingArrays() {
    for (let i = 0; i < size; i++) {
        let value = parseInt(prompt("Enter a value"));
        arr.push(value);
    }
    console.log("The Entered Array: " + arr);
}

function RemoveDuplicates() {
    let uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);
    console.log("Array without duplicates: " + uniqueArr);
}

CreatingArrays();
RemoveDuplicates();


let str1 = prompt("Enter a String"); // Prompt user for input
let sentence = str1.split(""); // Split the string into individual characters
let vowels = ["a", "e", "i", "o", "u"]; // Define vowels

function shortcut() {
  let filtered = sentence.filter(char => !vowels.includes(char.toLowerCase())); 
  // Keep only characters that are NOT vowels
  console.log(filtered.join("")); // Join the array back into a string
}

shortcut();
