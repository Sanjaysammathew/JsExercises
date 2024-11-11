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
