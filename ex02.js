// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

function arrayDifference(arrays) {
    let result = []
    for (i = 0; i < arrays[0].length; i++) {
        if (arrays[1].includes(arrays[0][i]) == false) {
            result.push(arrays[0][i])
        }
    }
    return result
}

console.log(arrayDifference([[1, 2, 3], [2, 3, 4]])); // Expected output: [1]