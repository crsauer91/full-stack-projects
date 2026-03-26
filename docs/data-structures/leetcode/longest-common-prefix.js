// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// Determine the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { // Approach: Horizontal Scanning
    if (strs.length === 0) return ""; // Edge case: empty array
    
    let prefix = strs[0]; // Start with the first string as the initial prefix
    
    for (let i = 1; i < strs.length; i++) { // Iterate through the remaining strings
        while (strs[i].indexOf(prefix) !== 0) { // Check if the current string starts with the prefix
            prefix = prefix.substring(0, prefix.length - 1); // If not, shorten the prefix by removing the last character
            if (prefix === "") return ""; // If the prefix becomes empty, return an empty string
        }
    }
    
    return prefix; // Return the longest common prefix found
}