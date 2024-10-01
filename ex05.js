// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(string) {
    let arr1 = string.split(" ")
    let arr2 = []
    let output = 0
    for (i = 0; i < arr1.length; i++) {
        for (k = 0; k < arr1[i].length; k++) {
            arr2.push(arr1[i][k])
        }
    }
    for (g = 0; g < arr2.length; g++) {
        if (arr2[g] === "a" || arr2[g] === "i" || arr2[g] === "e" || arr2[g] === "o" || arr2[g] === "u") {
            output += 0
        } else {
            output += 1
        }
    }
    return output
}

console.log(countConsonants("hello world")); // Expected output: 7