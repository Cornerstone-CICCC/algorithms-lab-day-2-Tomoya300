// Exercise 13: Write a recursive function `sumRange` that takes a number `n`
// and returns the sum of all numbers from 1 to `n`.
// Example: sumRange(5) should return 15 (1 + 2 + 3 + 4 + 5).

let result = 0
function sumRange(n) {
    if (n > 0) {
        result += n
        return sumRange(n - 1)
    }
    return result
}

console.log(sumRange(5)); // Expected output: 15