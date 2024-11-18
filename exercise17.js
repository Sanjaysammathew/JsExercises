let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  } else {
    oddNumbers.push(arr[i]);
  }
}

console.log("Even Numbers are: " + evenNumbers.join(", "));
console.log("Odd Numbers are: " + oddNumbers.join(", "));
