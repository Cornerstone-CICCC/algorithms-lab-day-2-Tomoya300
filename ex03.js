// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(array) {
    let missing = 0
    for (i = 0; i < array.length - 1; i++) {
        if (array[i] + 1 === array[i + 1]) {
            missing += 0
        } else {
            missing += array[i] + 1
        }
    }
    return missing
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3