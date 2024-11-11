let sentences = ["apple", "banana", "apple", "kiwi", "banana", "kiwi", "kiwi", "apple", "kiwi", "kiwi"];
let sentenceCounts = {};

for (let sentence of sentences) {
    if (sentenceCounts[sentence]) {
        sentenceCounts[sentence]++; // Increment the count (integer)
    } else {
        sentenceCounts[sentence] = 1; // Initialize the count as 1 (first occurrence)
    }
}

console.log(sentenceCounts);
