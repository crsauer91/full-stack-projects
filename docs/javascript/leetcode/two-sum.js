// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

var twoSum = function(nums, target) { // Time complexity: O(n)
    const map = new Map(); // Map to store the complement and its index
    
    for (let i = 0; i < nums.length; i++) { // Iterate through the array
        const complement = target - nums[i]; // Calculate the complement
        
        if (map.has(complement)) { // Check if the complement exists in the map
            return [map.get(complement), i]; // If it exists, return the indices of the complement and the current number
        }
        
        map.set(nums[i], i); // If the complement does not exist, add the current number and its index to the map
    }
    
    return []; // Return an empty array if no solution is found (though the problem guarantees one solution)
}