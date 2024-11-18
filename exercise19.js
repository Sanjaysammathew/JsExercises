function flattenArray(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten nested arrays
            result = result.concat(flattenArray(arr[i]));
        } else {
            // Add non-array elements directly to the result
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Example usage:
let input = [1, [2, 3], [4, [5, 6]], 7];
let output = flattenArray(input);
console.log(output); // Output: [1, 2, 3, 4, 5, 6, 7]
