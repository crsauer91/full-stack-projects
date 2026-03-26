// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

// Remove element
/**
 * @param {number[]} nums // The array of numbers from which we want to remove the specified value.
 * @param {number} val // The value that we want to remove from the array.
 * @return {number} // The new length of the array after removing the specified value.
 */
var removeElement = function(nums, val) { // Initialize a pointer 'i' to keep track of the position where we will place the next non-val element.
    let i = 0; // Loop through each element in the 'nums' array using a pointer 'j'.
    for (let j = 0; j < nums.length; j++) { // Check if the current element 'nums[j]' is not equal to 'val'.
        if (nums[j] !== val) { // If it's not equal, we assign it to 'nums[i]' and increment 'i' to move to the next position for the next non-val element.
            nums[i] = nums[j]; // Increment 'i' to move to the next position for the next non-val element.
            i++; // This effectively overwrites the elements that are equal to 'val' and keeps only the non-val elements at the beginning of the array.
        }
    }
    return i; // After the loop, 'i' will represent the new length of the array containing only the non-val elements. We return 'i' as the result.
};