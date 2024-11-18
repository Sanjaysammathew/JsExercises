function countFrequency(str) {
    let frequency = {}; // Step 2: Empty object to store frequency

    // Step 3: Iterate through the string using a traditional for loop
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // Access character at index i
        if (frequency[char]) {
            // Step 4: Increment if character exists
            frequency[char]++;
        } else {
            // Step 4: Initialize to 1 if character doesn't exist
            frequency[char] = 1;
        }
    }

    return frequency; // Step 5: Return the result
}

// Example Usage
let input = prompt("Enter a string:"); // Step 1: Take input
let result = countFrequency(input);
console.log(result);
