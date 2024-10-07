// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.


function findMax(array, index = 0) {
    if (array.length - 1 === index) {
        return array[index]
    }
    let rest = findMax(array, index + 1)
    return array[index] > rest ? array[index] : rest
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9