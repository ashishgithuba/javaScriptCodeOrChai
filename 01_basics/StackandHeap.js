let name = "Ashish";          // stored in Stack
let age = 21;                 // stored in Stack

let person = {                // object stored in Heap
  name: "Ashish",
  age: 21
};

let another = person;         // both 'another' and 'person' point to same object in Heap
// console.log(person);
console.log(name);