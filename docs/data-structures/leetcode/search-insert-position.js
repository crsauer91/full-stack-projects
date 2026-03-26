//Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Search insert position
/**
 * @param {number[]} nums // A sorted array of distinct integers
 * @param {number} target // The target value to search for
 * @return {number} // The index of the target if found, or the index where it would be inserted in order
 */
var searchInsert = function(nums, target) { // Initialize left and right pointers for binary search
    let left = 0; // Start of the array
    let right = nums.length - 1; // End of the array
    
    while (left <= right) { // Continue searching while the left pointer is less than or equal to the right pointer
        const mid = Math.floor((left + right) / 2); // Calculate the middle index
        
        if (nums[mid] === target) { // If the target is found at the middle index
            return mid; // Target found, return its index
        } else if (nums[mid] < target) { // If the target is greater than the middle element, search in the right half
            left = mid + 1; // Search in the right half
        } else { // If the target is less than the middle element, search in the left half
            right = mid - 1; // Search in the left half
        }
    }
    
    return left; // Target not found, return the insertion point
};