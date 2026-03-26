// Create object for rappers
const rapper = {
  name: "Eminem",
  age: 50,
  albums: ["The Slim Shady LP", "The Marshall Mathers LP", "The Eminem Show"],
  isAlive: true,
};

// Accessing properties
console.log(rapper.name); // Output: Eminem
console.log(rapper["age"]); // Output: 50

// Adding a new property
rapper.genre = "Hip Hop";
console.log(rapper.genre); // Output: Hip Hop

// Updating an existing property
rapper.age = 51;
console.log(rapper.age); // Output: 51

// Deleting a property
delete rapper.isAlive;
console.log(rapper.isAlive); // Output: undefined

// Looping through properties
for (let key in rapper) {
  console.log(`${key}: ${rapper[key]}`);
}

// Output:
// name: Eminem
// age: 51
// albums: The Slim Shady LP,The Marshall Mathers LP,The Eminem Show
// genre: Hip Hop