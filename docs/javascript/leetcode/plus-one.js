// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits // An array of digits representing a large integer.
 * @return {number[]} // The resulting array of digits after incrementing the large integer by one.
 */
var plusOne = function(digits) { // Start from the last digit and iterate backwards through the array.
    for (let i = digits.length - 1; i >= 0; i--) { // If the current digit is less than 9, increment it by one and return the updated array.
        if (digits[i] < 9) { // If the current digit is 9, set it to 0 and continue to the next digit.
            digits[i]++; // If we have successfully incremented a digit, we can return the updated array.
            return digits; // If we have reached the beginning of the array and all digits were 9, we need to add a new digit at the front of the array.
        }
        digits[i] = 0; // If we have reached the beginning of the array and all digits were 9, we need to add a new digit at the front of the array.
    }
    digits.unshift(1); // If we have reached the beginning of the array and all digits were 9, we need to add a new digit at the front of the array.
    return digits; // Return the updated array of digits after incrementing the large integer by one.
};