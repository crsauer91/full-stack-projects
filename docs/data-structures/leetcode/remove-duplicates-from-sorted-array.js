// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// Remove duplicates from a sorted array in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
/**
 * @param {number[]} nums // The input array of numbers, sorted in non-decreasing order.
 * @return {number} // The number of unique elements in the array after removing duplicates.
 */
var removeDuplicates = function(nums) { // Check if the input array is empty. If it is, return 0 since there are no unique elements.
    if (nums.length === 0) return 0; // Initialize a pointer 'i' to keep track of the position of the last unique element found. Start from the first element (index 0).
    let i = 0; // Iterate through the array starting from the second element (index 1) to the end of the array.
    for (let j = 1; j < nums.length; j++) { // Compare the current element (nums[j]) with the last unique element (nums[i]). If they are different, it means we have found a new unique element.
        if (nums[j] !== nums[i]) { // Move the pointer 'i' to the next position and update the value at that position to the new unique element (nums[j]).
            i++; // Update the value at index 'i' to the new unique element found at index 'j'.
            nums[i] = nums[j]; // This effectively removes duplicates by overwriting the duplicate values with unique values as we find them.
        }
    }
    return i + 1;    // After the loop, 'i' will be at the index of the last unique element. Since array indices are 0-based, we return 'i + 1' to get the count of unique elements in the array.
};