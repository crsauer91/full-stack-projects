let rappers = ["Eminem", "Tupac", "Notorious B.I.G.", "Jay-Z", "Nas"]

// 1. Add "Kendrick Lamar" to the end of the array
rappers.push("Kendrick Lamar")

// 2. Remove "Eminem" from the beginning of the array
rappers.shift()

// 3. Add "Drake" to the beginning of the array
rappers.unshift("Drake")

// 4. Remove "Notorious B.I.G." from the array
let bigIndex = rappers.indexOf("Notorious B.I.G.")
if (bigIndex !== -1) {
    rappers.splice(bigIndex, 1)
}

// 5. Replace "Jay-Z" with "J. Cole"
let jayZIndex = rappers.indexOf("Jay-Z")
if (jayZIndex !== -1) {
    rappers[jayZIndex] = "J. Cole"
}

// 6. Create a new array that contains only the first three rappers
let topRappers = rappers.slice(0, 3)

// 7. Create a new array that contains the last two rappers
let lastRappers = rappers.slice(-2)

// 8. Find the index of "Nas" in the array
let nasIndex = rappers.indexOf("Nas")

// 9. Check if "Kendrick Lamar" is in the array
let hasKendrick = rappers.includes("Kendrick Lamar")

// 10. Sort the array alphabetically
rappers.sort()

// 11. Reverse the order of the array
rappers.reverse()

// 12. Join all the rappers into a single string, separated by commas
let rappersString = rappers.join(", ")

// 13. Create a new array that contains the lengths of each rapper's name
let nameLengths = rappers.map(rapper => rapper.length)

// 14. Filter the array to include only rappers whose names are longer than 5 characters
let longNames = rappers.filter(rapper => rapper.length > 5)

// 15. Find the longest rapper's name in the array
let longestName = rappers.reduce((longest, rapper) => {
    return rapper.length > longest.length ? rapper : longest
}, "")