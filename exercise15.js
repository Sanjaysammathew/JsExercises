const person = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 65 }
];

let smallest = { name: "", age: Infinity }; // Default to the highest age
let adult = { name: "", age: 0 };           // Default to 0 age
let oldest = { name: "", age: 0 };          // Default to 0 age

for (let i = 0; i < person.length; i++) {
    if (person[i].age < 18 && person[i].age < smallest.age) {
        smallest = { name: person[i].name, age: person[i].age };
    } else if (person[i].age >= 18 && person[i].age <= 60) {
        adult = { name: person[i].name, age: person[i].age }; // Overwrites only the last adult
    } else if (person[i].age > 60 && person[i].age > oldest.age) {
        oldest = { name: person[i].name, age: person[i].age };
    }
}

if (smallest.age === Infinity) smallest.age = "No child found"; // Handle no child case
console.log("Child: " + smallest.name + " age: " + smallest.age);
console.log("Adult: " + adult.name + " age: " + adult.age);
console.log("Elder: " + oldest.name + " age: " + oldest.age);
