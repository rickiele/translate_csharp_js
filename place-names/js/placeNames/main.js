// Put your code here

// Array with strings
let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

// Log in console
console.log(names);

// Iterate over all the names
for (let name of names) {
    console.log(names);
};

// Filter the array to create a new array that only has
// place names that start with the word "The"
let theNames = names.filter((n) => n.startsWith("The"));

console.log("The Place Names");
for (let name of theNames) {
    console.log(name);
}