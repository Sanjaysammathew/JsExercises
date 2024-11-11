let arr = [];
let size = parseInt(prompt("Enter the Size"));

function CreatingArrays() {
    for (let i = 1; i <= size; i++) {
        arr[i] = i;
    }
}

function fizzbuzz() {
    for (let i = 1; i <= size; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(arr[i]);
        }
    }
}

CreatingArrays();
fizzbuzz();
