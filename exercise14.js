const person = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 29 }
];
let oldest =0
let oldest_guy =""
for(i=0;i<person.length;i++){
   if(person[i].age>oldest){
    oldest = person[i].age
    oldest_guy= person[i].name
   }
}
console.log(oldest_guy)