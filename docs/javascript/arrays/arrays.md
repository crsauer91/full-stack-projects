# arrays
- An array is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming.
## Basic Terminologies of Array
### Array Element
- Elements are items stored in an array, a list of values
- Array elements are ordered based on their index
### Array Index
- Elements are accessed by their indexes. Indexes in most of the programming languages start from 0.
- The first element is at index 0, the second at index 1, etc.
## Memory Representation of Array
- In an array, all of the elements or their references are stored in contiguous memory locations. This allows for efficient access and manipulation of elements.
## Declaration of Array
- // JS code
    - let arr = []
## Initialization of Array
- Arrays can store elements of different data types (numbers, strings, objects, and other arrays)
    - let arr = [1, 2, 3, 4, 5]
    - let arr = ['a', 'b', 'c', 'd', 'e']
    - let arr = [1.4, 2.0, 24, 5.0, 0.0]
## Why do we Need Arrays?
- We could declare five individual variables to keep track of records but manipulating and maintaining those would be cumbersome.
## Types of Arrays
Arrays can be classified on the basis of size or on the basis of dimensions
### Types of Arrays on the basis of size
#### Fixed Size Arrays
- Cannot alter/update size of the array
- Only the size that is mentioned in square brackets will be allocated for storage
- // Fixed size array example
    - int[] arr1 = new int [5];
- // Another way (array creation and initialization both)
    - int[] arr2 = {1, 2, 3, 4, 5};
#### Dynamic Sized Arrays
- The size of the array changes as per user requirements during execution of code so the coders do not need to worry about sizes. They can add and remove the elements as per the need. The memory is mostly dynamically allocated and deallocated in these arrays
- // Dynamic Sized Array
    - let arr = new Array();
### Types of Arrays on the basis of Dimensions
#### One dimensional array
- You can imagine a 1D array as a row where elements are stored one after the other
#### Multi dimensional array
- A multidimensional array is an array with more than one dimension. We can use multidimensional array to store complex data in the form of tables. We can have 2D, 3D, 4D arrays, etc.
##### Two dimensional array
- 2D multidimensional arrays can be considered as an array of arrays or as a matrix consisting of rows and columns
##### Three dimensional array
- A 3D multidimensional array contains three dimensions, so it can be considered an array of two dimensional arrays
## Operations on Array
- Traversal in array
### Insertions
- At beginning
- At given position
- At the end
### Deletion
- From beginning
- Given position
- First occurrence
- All occurrences
- From end
### Searching
- Linear search
- Binary search