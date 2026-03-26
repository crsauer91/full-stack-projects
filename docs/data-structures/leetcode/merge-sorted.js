// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

/**
 * @param {number[]} nums1 // The first array, which has enough space to hold the merged result
 * @param {number} m // The number of elements in nums1 that are part of the merged result
 * @param {number[]} nums2 // The second array, which contains n elements to be merged into nums1
 * @param {number} n // The number of elements in nums2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) { // Start from the end of both arrays and merge them in reverse order
    let i = m - 1; // Pointer for the last element in nums1
    let j = n - 1; // Pointer for the last element in nums2
    let k = m + n - 1; // Pointer for the last position in nums1

    while (i >= 0 && j >= 0) { // Compare elements from the end of both arrays and place the larger one at the end of nums1
        if (nums1[i] > nums2[j]) { // If the current element in nums1 is greater than the current element in nums2, place it at the end of nums1
            nums1[k] = nums1[i]; // Move the pointer for nums1
            i--; // Move the pointer for nums1
        } else { // If the current element in nums2 is greater than or equal to the current element in nums1, place it at the end of nums1
            nums1[k] = nums2[j]; // Move the pointer for nums2
            j--; // Move the pointer for nums2
        }
        k--; // Move the pointer for the merged array
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) { // If there are remaining elements in nums2, copy them to nums1
        nums1[k] = nums2[j]; //
        j--; // Move the pointer for nums2
        k--; // Move the pointer for the merged array
    }
};