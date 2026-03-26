// JS code
let arr = [];
// Initializaion of an array
let arr = [1, 2, 3, 4, 5];
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr = [1.4, 2.0, 24, 5.0, 0.0];
const cars = ['Toyota', 'Honda', 'Ford'];
// Fixed size array example
int[] arr1 = new int [5];
// Another way (array creation and initialization both)
int[] arr2 = {1, 2, 3, 4, 5};
// Dynamic Sized Array
let arr = new Array();
// Storing names in single variables (not array, not recommended)
let car1 = 'Toyota';
let car2 = 'Honda';
let car3 = 'Ford';
// Storing names in an array (recommended)
let cars = ['Toyota', 'Honda', 'Ford'];
// Space and line breaks are not important in arrays
let cars = [
    'Toyota',
    'Honda',
    'Ford'
];
// You can also create an empty array and add elements later
let cars = [];
cars[0]('Toyota');
cars[1]('Honda');
cars[2]('Ford');
// Create an array and assign values to it
const cars = new Array('Toyota', 'Honda', 'Ford');
// Accessing an array element by referring to the index number
let cars = ['Toyota', 'Honda', 'Ford'];
let firstCar = cars[0]; // Accessing the first element
let secondCar = cars[1]; // Accessing the second element
let thirdCar = cars[2]; // Accessing the third element
// Modifying an array element by referring to the index number
let cars = ['Toyota', 'Honda', 'Ford'];
cars[0] = 'Tesla'; // Modifying the first element
cars[1] = 'BMW'; // Modifying the second element
cars[2] = 'Audi'; // Modifying the third element
// Converting an Array to a String
let cars = ['Toyota', 'Honda', 'Ford'];
let carsString = cars.toString(); // Converts the array to a string
console.log(carsString); // Output: "Toyota,Honda,Ford"
// Access the full arrray
let cars = ['Toyota', 'Honda', 'Ford'];
console.log(cars); // Output: ["Toyota", "Honda", "Ford"]
// Arrays are objects
const person = {firstName: 'John', lastName: 'Doe', age:46};
// Array Elements Can Be Objects
myArray [0] = Date.now;
myArray [1] = myFunction;
myArray [2] = myCars;
// Array methods and properties
cars.length; // Returns the number of elements in the array
cars.sort(); // Sorts the array alphabetically
// The length property
const fruits = ['Apple', 'Banana', 'Cherry'];
let length = fruits.length; // Returns 3
// Accessing the first array element
const fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits[0]; // Returns "Apple"
// Accessing the last array element
const fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits[fruits.length - 1]; // Returns "Cherry"
// Looping array elements
const fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) // Loop through the array
// Adding array elements
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.push('Orange'); // Adds "Orange" to the end of the array
// Removing array elements
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.pop(); // Removes the last element ("Cherry") from the array
// Associative arrays
const person = [];
person[0] = 'John';
person[1] = 'Doe';
person[2] = 46;
person.length; // Returns 3, not 1
person[0]; // Returns "John"
// JavaScript new array
const points = new Array ();
const points = [];
const points = new Array (40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
// Create an array with three elements
const points = new Array (40, 100, 1);
// Create an array with two elements
const points = new Array (40, 100);
// Create an array with one element
const points = new Array (40);
// Create an array with 40 undefined elements
const points = new Array (40);
// How to recognize an array
const fruits = ['Apple', 'Banana', 'Cherry'];
Array.isArray(fruits); // Returns true
const person = {firstName: 'John', lastName: 'Doe', age:46};
Array.isArray(person); // Returns false
// Nested arrays and objects
const person = {
    name: 'John',
    age: 30,
    cars: [
        {name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang']},
        {name: 'BMW', models: ['320', 'X3', 'X5']},
        {name: 'Fiat', models: ['500', 'Panda']}
    ]
};
for (let i = 0; i < person.cars.length; i++) {
    console.log(person.cars[i].name); // Logs the name of each car brand
    for (let j = 0; j < person.cars[i].models.length; j++) {
        console.log(person.cars[i].models[j]); // Logs the model of each car
    }
}
// Adding and removing elements
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.push('Orange'); // Adds "Orange" to the end of the array
fruits.unshift('Mango'); // Adds "Mango" to the beginning of the array
fruits.pop(); // Removes the last element ("Cherry") from the array
fruits.shift(); // Removes the first element ("Mango") from the array
fruits.splice(1, 1); // Removes 1 element at index 1 ("Banana") from the array
// Searching and finding
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.indexOf('Banana'); // Returns 1 (the index of "Banana")
fruits.includes('Cherry'); // Returns true (checks if "Cherry" is in the array)
fruits.find(fruit => fruit.startsWith('B')); // Returns "Banana" (finds the first element that starts with "B")
// Transformation and iteration
//map() method
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num); // Returns [1, 4, 9, 16, 25]
//filter() method
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // Returns [2, 4]
//forEach() method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num)); // Logs each number to the console
// reduce() method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0); // Returns 15 (the sum of all numbers in the array)
// Utility and ordering
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Sorts the array in ascending order: [1, 5, 10, 25, 40, 100]
numbers.sort((a, b) => b - a); // Sorts the array in descending order: [100, 40, 25, 10, 5, 1]
numbers.reverse(); // Reverses the order of the array: [1, 5, 10, 25, 40, 100]
numbers.concat([50, 60]); // Concatenates the array with another array: [1, 5, 10, 25, 40, 100, 50, 60]
numbers.slice(1, 4); // Returns a portion of the array: [5, 10, 25] (from index 1 to index 3)
numbers.join(', '); // Joins all elements of the array into a string: "1, 5, 10, 25, 40, 100"