// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(array) {
    let missing = []
    for (i = array[0]; i <= array[array.length-1]; i++) {
        if (!array.includes(i)) {
            missing.push(i)
        } 
    }
    return missing
}

console.log(findMissingNumber([1, 2, 4, 5, 6, 7, 10])); // Expected output: 3, 8, 9