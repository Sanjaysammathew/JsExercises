function findMostFrequentElement(arr) {
    let frequencyMap = {}; // Step 1: Create a frequency map
    let maxCount = 0; // To track the highest frequency
    let mostFrequent = null; // To store the most frequent element

    // Step 2: Count the frequency of each element
    for (let num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }

        // Step 3: Track the element with the highest frequency
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

// Example Input
let arr = [3, 7, 3, 2, 5, 3, 7, 7];
console.log("Most Frequent Element:", findMostFrequentElement(arr));
// Output: Most Frequent Element: 7 (or 3, depending on implementation)
